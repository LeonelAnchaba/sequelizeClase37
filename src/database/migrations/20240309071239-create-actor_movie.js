'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('actor_movie', { 
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
      actor_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'actors'
          },
          key:'id'
        },
        onDelete:"cascade"
      },
      movie_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'movies'
          },
          key:'id'
        },
        onDelete:"cascade"
      }
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('actor_movie');
     
  }
};
