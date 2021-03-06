'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        /*matricula: {
          type: Sequelize.STRING,
          allowNull: false
        },*/
        email: {
          type: Sequelize.STRING,
        },/*
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },*/
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        uploaded_ad: {
          type: Sequelize.DATE,
          allowNull: false
        }

       });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');

  }
};
