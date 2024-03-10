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
    db.Actor.findByPk(req.params.id, {
      include: [{association: "movie"}, {association: "movies"}]
    })
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
          db.Movie.findAll()
          .then((movies) => {
            res.render('actorsAdd', {movies, errores:errores.mapped(), old:req.body})
            console.log("Entré en errores")
          })
            
        } else {
            db.Actor.create(req.body)
            .then(() => {
                res.redirect('/actors')
                console.log("Que llega del body cuando creo? :", req.body)
            })
          }
},
edit: (req, res) => {
  const pedidoActor = db.Actor.findByPk(req.params.id)
    const pedidoMovies = db.Movie.findAll()
    Promise.all([pedidoActor, pedidoMovies])
      .then(([actor, movies]) => {
        res.render("actorEdit", { Actor: actor, movies })
        // console.log("-----Holaaaaaaaa", response[1])
      })
  
},
update: (req, res) => {
  const { id } = req.params;
  const errores = validationResult(req);
  console.log("errores:", errores);
  if(!errores.isEmpty()){
    const pedidoActor = db.Actor.findByPk(req.params.id)
  const pedidoMovies = db.Movie.findAll()
  Promise.all([pedidoActor, pedidoMovies])
    .then(([actor, movies]) => {
      res.render("actorEdit", { Actor: actor, movies, errores:errores.mapped(),old:req.body })

    })
}
else{
  db.Actor.update(req.body,
{
where: {
  id:req.params.id
},
})
.then(()=> {
res.redirect(`/actors/detail/${id}`)
console.log("Movete deja de jodeeeeeeeee", req.body)
})
}
},
delete: (req, res) => {
  db.Actor.findByPk(req.params.id)
  .then((response) => {
    res.render("actorDelete", { Actor: response.dataValues})
  })
},
destroy: (req, res) => {
  const {id} = req.params
  db.Actor.destroy({
      where : { id }
  })
  .then(() => {
      res.redirect('/actors')
  })
},
}