'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seasons', [
      {
      id: 1,
      created_at: new Date,
      updated_at: new Date,
      title: "Primera Temporada",
      number: 1,
      release_date: "2002-03-05",
      end_date: "2002-05-23",
      serie_id: 1
    }
     ,
     {
       id: 2,
       created_at: new Date,
       updated_at: new Date,
       title: "Segunda Temporada",
       number: 2,
       release_date: "2003-03-13",
       end_date: "2003-12-26",
       serie_id: 1
     },
     {
       id: 3,
       created_at: new Date,
       updated_at: new Date,
       title: "Única Temporada",
       number: 1,
       release_date: "2000-06-06",
       end_date: "2000-12-26",
       serie_id: 2
     },
     {
       id: 4,
       created_at: new Date,
       updated_at: new Date,
       title: "Primera Temporada",
       number: 1,
       release_date: "2016-06-02",
       end_date: "2016-08-18",
       serie_id: 3
     },
     {
       id: 5,
       created_at: new Date,
       updated_at: new Date,
       title: "Segunda Temporada",
       number: 2,
       release_date: "2018-07-17",
       end_date: "2018-09-25",
       serie_id: 3
     },
     {
       id: 6,
       created_at: new Date,
       updated_at: new Date,
       title: "Tercera Temporada",
       number: 3,
       release_date: "2019-07-09",
       end_date: "2019-09-24",
       serie_id: 3
     },
     {
       id: 7,
       created_at: new Date,
       updated_at: new Date,
       title: "Cuarta Temporada",
       number: 4,
       release_date: "2022-01-19",
       end_date: "2022-01-19",
       serie_id: 3
     },
     {
       id: 8,
       created_at: new Date,
       updated_at: new Date,
       title: "Quinta Temporada",
       number: 5,
       release_date: "2022-05-04",
       end_date: "2022-05-04",
       serie_id: 3
     },
     {
       id: 9,
       created_at: new Date,
       updated_at: new Date,
       title: "Primera Temporada",
       number: 1,
       release_date: "2007-03-21",
       end_date: "2007-12-07",
       serie_id: 4
     },
     {
       id: 10,
       created_at: new Date,
       updated_at: new Date,
       title: "Segunda Temporada",
       number: 2,
       release_date: "2008-03-14",
       end_date: "2007-11-29",
       serie_id: 4
     },
     {
       id: 11,
       created_at: new Date,
       updated_at: new Date,
       title: "Tercera Temporada",
       number: 3,
       release_date: "2009-03-09",
       end_date: "2009-12-10",
       serie_id: 4
     },
     {
       id: 12,
       created_at: new Date,
       updated_at: new Date,
       title: "Cuarta Temporada",
       number: 4,
       release_date: "2010-03-15",
       end_date: "2010-11-29",
       serie_id: 4
     },
     {
       id: 13,
       created_at: new Date,
       updated_at: new Date,
       title: "Primera Temporada",
       number: 1,
       release_date: "1995-08-14",
       end_date: "1996-03-15",
       serie_id: 5
     },
     {
     id: 14,
     created_at: new Date,
     updated_at: new Date,
     title: "Segunda Temporada",
     number: 2,
     release_date: "1996-03-18",
     end_date: "1996-12-31",
     serie_id: 5
   },
   {
     id: 15,
     created_at: new Date,
     updated_at: new Date,
     title: "Tercera Temporada",
     number: 3,
     release_date: "1997-04-14",
     end_date: "1997-12-12",
     serie_id: 5
   },
   {
     id: 16,
     created_at: new Date,
     updated_at: new Date,
     title: "Cuarta Temporada",
     number: 4,
     release_date: "1998-04-27",
     end_date: "1998-11-27",
     serie_id: 5
   },
   {
     id: 17,
     created_at: new Date,
     updated_at: new Date,
     title: "Quinta Temporada",
     number: 5,
     release_date: "1999-04-05",
     end_date: "1999-12-03",
     serie_id: 5
   },
   {
     id: 18,
     created_at: new Date,
     updated_at: new Date,
     title: "Sexta Temporada",
     number: 6,
     release_date: "2000-05-02",
     end_date: "2000-11-24",
     serie_id: 5
   },
   {
     id: 19,
     created_at: new Date,
     updated_at: new Date,
     title: "Séptima Temporada",
     number: 7,
     release_date: "2001-06-17",
     end_date: "2001-08-12",
     serie_id: 5
   },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seasons', null, {});
     
  }
};
