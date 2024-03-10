const db = require("../database/models");
const {validationResult} = require('express-validator');

module.exports  = {
list: (req,res) => {
    db.Actor.findAll({
      order: [["first_name"]]
    })
    .then((actors) => {
        res.render("actorsList",{actors})
    })
    .catch(err => {
        console.log(err)
         res.send("Se detectó un error con los géneros")
        
    })

},
detail: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then(function (actor) {
        res.render("actorsDetail", { actor });
      })
      .catch((err) => {
        console.log(err);
        res.send("Se detectó un error en el detalle");
      });

},
best: (req, res) => {
  db.Actor.findAll({
    where: {
      rating: { [db.Sequelize.Op.gte]: 7 },
    },
    order: [["rating", "DESC"]],
    limit: 10,
  }).then((actors) => {
    res.render("bestActors.ejs", { actors });
  })
  .catch((err) => {
      console.log(err);
      res.send("No pude acceder a las recomendaciones");
    });
},
add: (req, res) => {
  db.Movie.findAll()
  .then((movies) => {
    res.render('actorsAdd', {movies})
  })
  
},
create: (req, res) => {
  const errores = validationResult(req)
        if(!errores.isEmpty()){
            res.render('actorsAdd', {errores:errores.mapped(), old:req.body})
            console.log("Entré en errores")
        } else {
            db.Actor.create(req.body)
            .then(() => {
                res.redirect('/actors')
                console.log("Que llega del body cuando creo? :", req.body)
            })
          }
},
edit: (req, res) => {

},
update: (req, res) => {

},
delete: (req, res) => {

},
destroy: (req, res) => {

},
}