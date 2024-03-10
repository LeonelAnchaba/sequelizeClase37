'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('episodes', {
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
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      rating: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false
      },
      season_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references:{
          model:{
            tableName:'seasons'
          },
          key:'id'
        },
        onDelete:"cascade"
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('episodes');
     
  }
};
