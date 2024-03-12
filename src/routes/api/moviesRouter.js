const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');


router.get('/api/movies', apiMoviesController.list);
// router.get('/movies/new', moviesController.new);
// router.get('/movies/recommended', moviesController.recommended);
router.get('/api/movies/:id', apiMoviesController.detail);

//Rutas exigidas para la creación del CRUD

router.post('/api/movies', apiMoviesController.create);

router.delete('/api/movies/:id', apiMoviesController.destroy);


module.exports = router;