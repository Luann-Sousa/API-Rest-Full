'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
     "users",
     "islogged",
     {
       type: Sequelize.BOOLEAN
     }
   );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "users",
      "islogged",
    );
  }
};
