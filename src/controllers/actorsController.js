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
          })     
        } else {      
            db.Actor.create(req.body)
            .then((resp) => {
            const movies = req.body.movieNumber
              for (let i=0; i<movies.length; i++){
              db.Actor_movie.create({
                actor_id:resp.dataValues.id,  
                movie_id: movies[i],
              })
            }
            })
              .then(()=> {
                res.redirect('/actors')
              })                    
          }
},
edit: (req, res) => {
  const pedidoActor = db.Actor.findByPk(req.params.id, {
    include: [{association: "movies"}]
  })
    const pedidoMovies = db.Movie.findAll()
    Promise.all([pedidoActor, pedidoMovies])
      .then(([actor, movies]) => {
        res.render("actorEdit", { Actor: actor, movies })
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
  const movies = req.body.movieNumber
  for (let i=0; i<movies.length; i++){ 
    db.Actor_movie.destroy({
        where : {
          actor_id : id
        }
    })
}
  db.Actor.update(req.body,
{
where: {
  id:req.params.id
},
})
.then((resp) => {
    for (let i=0; i<movies.length; i++){
    db.Actor_movie.create({
      actor_id: req.params.id,  
      movie_id: movies[i],
    })
  }})
.then(()=> {
res.redirect(`/actors/detail/${id}`)
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