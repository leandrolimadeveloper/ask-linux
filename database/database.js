const Sequelize = require('sequelize')
const connection = new Sequelize('asklinux', 'root', 'userMSQP.!x8.', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
