const db = require("../database/models");
const {validationResult} = require('express-validator');


module.exports = {
  list: (req, res) => {
    db.Movie.findAll()
      .then((movies) => {
        res.render("moviesList", { movies });
      })
      .catch((err) => {
        console.log(err);
        res.send("Se detectó un error");
      });
  },

  detail: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then(function (movie) {
        res.render("moviesDetail", { movie });
      })
      .catch((err) => {
        console.log(err);
        res.send("Se detectó un error en el detalle");
      });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5
    })
      .then((movies) => {
        res.render("newestMovies", { movies });
      })
      .catch((err) => {
        console.log(err);
        res.send("Upps! No pude recopilar las películas que deseabas");
      });
  },

  recommended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 7 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies.ejs", { movies });
    })
    .catch((err) => {
        console.log(err);
        res.send("No pude acceder a las recomendaciones");
      });
  }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    db.Genre.findAll()
    .then((genres) => {
        res.render('moviesAdd', {genres})
        console.log("----------------!", genres)
    })
  },
  create: function (req, res) {
    const errores = validationResult(req);
        console.log("errores:", errores);
        if(!errores.isEmpty()){
          db.Genre.findAll()
            .then((genres) => {
          console.log("Ingrese en errores", req.body);
          res.render('moviesAdd',{genres, errores:errores.mapped(),old:req.body})
        })
      }
      else{

    db.Movie.create(req.body)
    .then(()=> {
      res.redirect("/movies")
    })
  }
  },
  edit: function(req, res) {
      Promise.all([db.Movie.findByPk(req.params.id),db.Genre.findAll()])
      .then((response) => {
        res.render("moviesEdit", { Movie: response[0].dataValues, genres:response[1] })
        // console.log("-----Holaaaaaaaa", response[1])
      })
  },
  update: function (req,res) {
    const { id } = req.params;
    const errores = validationResult(req);
    console.log("errores:", errores);
    if(!errores.isEmpty()){
      Promise.all([db.Movie.findByPk(req.params.id),db.Genre.findAll()])
      .then((response) => {
        res.render("moviesEdit", { Movie: response[0].dataValues, genres:response[1], errores:errores.mapped(),old:req.body })
        console.log("Movete boca moveteeee", response[1])
      })
  }
  else{

db.Movie.update( req.body, {
  where: {id}
}
  )
.then(()=> {
  res.redirect(`/movies/detail/${id}`)
  console.log("Movete deja de jodeeeeeeeee", genres)
})
}
  },
  delete: function (req, res) {
    db.Movie.findByPk(req.params.id)
    .then((response) => {
      res.render("moviesDelete", { Movie: response.dataValues})
    })
  },
  destroy: function (req, res) {
    const {id} = req.params
    db.Movie.destroy({
        where : { id }
    })
    .then(() => {
        res.redirect('/movies')
    })
  },
};
