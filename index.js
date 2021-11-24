const express = require('express')
const app = express()
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o BD')
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Body-Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Rotas
app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC'] 
    ]}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })    
    })
    
})

app.get('/pergunta', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            })
        } else {
            res.redirect('/')
        }
    })
})

app.post('/responder', (req, res) => {
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/' + perguntaId)
    })
})

app.listen(3000, 'localhost', () => {
    console.log('App rodando!')
})
