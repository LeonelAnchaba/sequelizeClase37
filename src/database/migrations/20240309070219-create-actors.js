'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('actors', { 
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
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      rating: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: true
      },
      favorite_movie_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
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
    await queryInterface.dropTable('actors');
     
  }
};
