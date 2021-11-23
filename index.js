const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Body-Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Rotas
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/pergunta', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send('Formulário recebido<br>Título: ' + titulo + '<br>Descrição: ' + descricao)
})

app.listen(3000, 'localhost', () => {
    console.log('App rodando!')
})
