'use strict';

module.exports = {
  //criacaoo
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allouwNull:false,

      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING,
      allowNull: false
      },
      email:{
        type: Sequelize.STRING,
      allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:true
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:true
      }
    })
  },
//destroi
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
