const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');
const ActorsValidation = require("../validation/validationActors.js")

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);
router.get('/actors/best', actorsController.best);

router.get('/actors/add',actorsController.add);
router.post('/actors/create', ActorsValidation, actorsController.create);

router.get('/actors/edit/:id', actorsController.edit);
router.put('/actors/update/:id', ActorsValidation, actorsController.update);

router.get('/actors/delete/:id', actorsController.delete);
router.delete('/actors/delete/:id', actorsController.destroy);


module.exports = router;