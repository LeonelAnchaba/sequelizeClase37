const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');
const ActorsValidation = require("../validation/validationActors.js")

router
.get('/actors', actorsController.list)
.get('/actors/detail/:id', actorsController.detail)
.get('/actors/best', actorsController.best)

.get('/actors/add',actorsController.add)
.post('/actors/create', ActorsValidation, actorsController.create)

.get('/actors/edit/:id', actorsController.edit)
.put('/actors/update/:id', ActorsValidation, actorsController.update)

.get('/actors/delete/:id', actorsController.delete)
.delete('/actors/delete/:id', actorsController.destroy)


module.exports = router;