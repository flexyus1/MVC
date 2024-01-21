const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try{

}catch(error){
  console.log(`Erro ao conectar com o banco${error}`)
}

module.exports = sequelize



