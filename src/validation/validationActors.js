const {body} = require('express-validator');
const db = require ("../database/models")


module.exports = [
    body('first_name').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength(min=3, max=30).withMessage("Debe contener entre 3 y 30 caracteres."),
    body('last_name').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength(min=3, max=30).withMessage("Debe contener entre 3 y 30 caracteres."),
    body("rating").notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isFloat({ min: 0, max: 10 }).withMessage('El número debe estar entre 0.1 y 10'),
    

];