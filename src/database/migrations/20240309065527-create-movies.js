'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('movies', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      rating: {
        type: Sequelize.DECIMAL(3,1).UNSIGNED,
        allowNull: false
      },
      awards: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      length: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      genre_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references:{
          model:{
            tableName:'genres'
          },
          key:'id'
        },
        onDelete:"cascade"
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
     
  }
};
