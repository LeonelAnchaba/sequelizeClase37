'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actor_movie', [{
        id: 1,
        created_at: new Date,
        updated_at: new Date,
        actor_id: 1,
        movie_id: 1
     },
     {
      id: 2,
      created_at: new Date,
      updated_at: new Date,
      actor_id: 2,
      movie_id: 1
   },
   {
    id: 3,
    created_at: new Date,
    updated_at: new Date,
    actor_id: 3,
    movie_id: 1
 },
 {
  id: 4,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 4,
  movie_id: 2
},
{
  id: 5,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 5,
  movie_id: 2
},
{
  id: 6,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 6,
  movie_id: 2
},
{
  id: 7,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 7,
  movie_id: 3
},
{
  id: 8,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 8,
  movie_id: 3
},
{
  id: 9,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 7,
  movie_id: 4
},
{
  id: 10,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 9,
  movie_id: 4
},
{
  id: 11,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 10,
  movie_id: 4
},
{
  id: 12,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 11,
  movie_id: 5
},
{
  id: 13,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 12,
  movie_id: 5
},
{
  id: 14,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 13,
  movie_id: 6
},
{
  id: 15,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 14,
  movie_id: 6
},
{
  id: 16,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 15,
  movie_id: 7
},
{
  id: 17,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 16,
  movie_id: 8
},
{
  id: 18,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 17,
  movie_id: 8
},
{
  id: 19,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 3,
  movie_id: 9
},
{
  id: 20,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 18,
  movie_id: 9
},
{
  id: 21,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 19,
  movie_id: 10
},
{
  id: 22,
  created_at: new Date,
  updated_at: new Date,
  actor_id: 20,
  movie_id: 10
},
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actor_movie', null, {});
    
  }
};
