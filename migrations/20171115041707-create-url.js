'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Url', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      original_url: {
        type: Sequelize.STRING
      }
    }, {
      dialect: 'postgres'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Url');
  }
};