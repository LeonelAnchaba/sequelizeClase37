'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genres', [
      {
        id: 1,
        created_at: new Date,
        updated_At: new Date,
        name: "Comedia",
        ranking: 1,
        active: 1
      },
      {
        id: 2,
        created_at: new Date,
        updated_At: new Date,
        name: "Terror",
        ranking: 2,
        active: 1
      },
      {
        id: 3,
        created_at: new Date,
        updated_At: new Date,
        name: "Drama",
        ranking: 3,
        active: 1
      },
      {
        id: 4,
        created_at: new Date,
        updated_At: new Date,
        name: "Accion",
        ranking: 4,
        active: 1
      },
      {
        id: 5,
        created_at: new Date,
        updated_At: new Date,
        name: "Ciencia Ficcion",
        ranking: 5,
        active: 1
      },
      {
        id: 6,
        created_at: new Date,
        updated_At: new Date,
        name: "Suspenso",
        ranking: 6,
        active: 1
      },
      {
        id: 7,
        created_at: new Date,
        updated_At: new Date,
        name: "Animacion",
        ranking: 7,
        active: 1
      },
      {
        id: 8,
        created_at: new Date,
        updated_At: new Date,
        name: "Aventuras",
        ranking: 8,
        active: 1
      },
      {
        id: 9,
        created_at: new Date,
        updated_At: new Date,
        name: "Documental",
        ranking: 9,
        active: 1
      },
      {
        id: 10,
        created_at: new Date,
        updated_At: new Date,
        name: "Infantiles",
        ranking: 10,
        active: 1
      },
      {
        id: 11,
        created_at: new Date,
        updated_At: new Date,
        name: "Fantasia",
        ranking: 11,
        active: 1
      },
      {
        id: 12,
        created_at: new Date,
        updated_At: new Date,
        name: "Musical",
        ranking: 12,
        active: 1
      },
      {
        id: 13,
        created_at: new Date,
        updated_At: new Date,
        name: "Policial",
        ranking: 13,
        active: 1
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('genres', null, {});
     
  }
};
