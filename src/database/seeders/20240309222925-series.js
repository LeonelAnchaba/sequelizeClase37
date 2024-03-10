'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('series', [
      {
      id: 1,
      created_at: new Date,
      updated_at: new Date,
      title: "Los Simuladores",
      release_date: "2002-03-05",
      end_date: "2003-12-26",
      genre_id: 8
     },
     {
      id: 2,
      created_at: new Date,
      updated_at: new Date,
      title: "Okupas",
      release_date: "2000-09-12",
      end_date: "2001-12-28",
      genre_id: 3
     },
     {
      id: 3,
      created_at: new Date,
      updated_at: new Date,
      title: "El Marginal",
      release_date: "2016-06-02",
      end_date: "2022-05-10",
      genre_id: 13
     },
     {
      id: 4,
      created_at: new Date,
      updated_at: new Date,
      title: "Casi Ángeles",
      release_date: "2007-03-21",
      end_date: "2010-11-29",
      genre_id: 11
     },
     {
      id: 5,
      created_at: new Date,
      updated_at: new Date,
      title: "Chiquititas",
      release_date: "1995-08-14",
      end_date: "2001-12-12",
      genre_id: 8
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('series', null, {});
     
  }
};
