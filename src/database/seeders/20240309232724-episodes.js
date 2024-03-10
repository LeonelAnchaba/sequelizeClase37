'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('episodes', [{
      id: 1,
      created_at: new Date,
      updated_at: new Date,
      title: "Las apariencias engañan",
      number: 1,
      release_date: "2002-03-05",
      rating: 8.2,
      season_id: 1
     },
     {
      id: 2,
      created_at: new Date,
      updated_at: new Date,
      title: "Hasta que la muerte nos separe",
      number: 2,
      release_date: "2003-12-26",
      rating: 7.9,
      season_id: 2
     },
     {
      id: 3,
      created_at: new Date,
      updated_at: new Date,
      title: "El principio del fin",
      number: 1,
      release_date: "2000-06-06",
      rating: 8,
      season_id: 3
     },
     {
      id: 4,
      created_at: new Date,
      updated_at: new Date,
      title: "El fin del mundo",
      number: 1,
      release_date: "2000-12-26",
      rating: 8.2,
      season_id: 3
     },
     {
      id: 5,
      created_at: new Date,
      updated_at: new Date,
      title: "La cárcel es un infierno",
      number: 1,
      release_date: "2016-06-02",
      rating: 9,
      season_id: 4
     },
     
     {
      id: 6,
      created_at: new Date,
      updated_at: new Date,
      title: "Fin",
      number: 5,
      release_date: "2022-05-04",
      rating: 7.3,
      season_id: 8
     },
     {
      id: 7,
      created_at: new Date,
      updated_at: new Date,
      title: "La llegada de los nuevos",
      number: 1,
      release_date: "2007-03-21",
      rating: 8.8,
      season_id: 9
     },
     {
      id: 8,
      created_at: new Date,
      updated_at: new Date,
      title: "El adiós",
      number: 4,
      release_date: "2010-11-29",
      rating: 9.3,
      season_id: 12
     },
     {
      id: 9,
      created_at: new Date,
      updated_at: new Date,
      title: "Capítulo 1",
      number: 1,
      release_date: "1995-08-14",
      rating: 6.9,
      season_id: 13
     },
     {
      id: 10,
      created_at: new Date,
      updated_at: new Date,
      title: "Capítulo 262",
      number: 7,
      release_date: "2001-08-12",
      rating: 9.3,
      season_id: 19
     },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('episodes', null, {});
     
  }
};
