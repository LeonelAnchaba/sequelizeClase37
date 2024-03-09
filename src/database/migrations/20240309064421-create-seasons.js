'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('seasons', {
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
        allowNull: true
      },
      number: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      serie_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references:{
          model:{
            tableName:'series'
          },
          key:'id'
        },
        onDelete:"cascade"
      }
      });
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('seasons');
  }
};
