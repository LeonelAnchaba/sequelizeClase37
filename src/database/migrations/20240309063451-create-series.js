'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('series', { 
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
      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
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
    await queryInterface.dropTable('series');
  }
};
