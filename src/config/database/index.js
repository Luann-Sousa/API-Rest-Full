//configurando meu bancoo MYSL

//IMPORT SEQUELIZE
const Sequelize = require('sequelize');

//importando as config do meu Bnco MYSQL
const dbConfig = require('../../config/database');

//importando  Models user
const User = require('../../models/User')
//criando minha connection e passando as config do Mysql
const connection = new Sequelize(dbConfig);

User.init(connection);
try{
    connection.authenticate();
        console.log('Connection has been estabelished successfully ')

}catch(error){
    console.log('Unable to connect to the database:', error);
}

module.exports = connection;