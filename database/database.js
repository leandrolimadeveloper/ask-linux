const Sequelize = require('sequelize')
const connection = new Sequelize('asklinux', 'root', 'password-DB-1', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
