const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/pergunta', (req, res) => {
    res.render('perguntar')
})

app.get('/', (req, res) => {
    res.render('sobre/informacao')
})

app.get('/categorias/:distro/:versao', (req, res) => {
    var distro = req.params.distro
    var versao = req.params.versao
    res.render('categoria', {
        distro: distro,
        versao: versao
    })
})

app.get('/perfil', (req, res) => {
    var status = false
    var nome = 'Leandro Lima'
    var linguagem = 'JS'
    var redesSociais = [
        {nome: 'Facebook'},
        {nome: 'Twitter'}, 
        {nome: 'Instagram'},
    ]
    res.render('perfil', {
        nome: nome,
        linguagem: linguagem,
        empresa: 'Ask Linux',
        pais: 'Brasil',
        seguidores: 3500,
        redes: redesSociais,
        situacao: status,
        distros: [{nome: 'Ubuntu', versao: '22.10'}, {nome: 'Linux Mint', versao: 22.2}, {nome: 'Fedora'}]
    })
})

app.listen(3000, 'localhost', () => {
    console.log('App rodando!')
})

