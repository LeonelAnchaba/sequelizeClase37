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
    db.Movie.findByPk(req.params.id, {
      include: [{association: "genre"}, {association: "actors"}]
    })
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
      limit: 5,
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
        // console.log("----------------!", genres)
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
      res.redirect(`/movies`)
      console.log("Que llega del body cuando creo? :", req.body)
    })
  }
  },
  edit: function(req, res) {
    const pedidoMovie = db.Movie.findByPk(req.params.id)
    const pedidoGenres = db.Genre.findAll()
    Promise.all([pedidoMovie, pedidoGenres])
      .then(([movie, genres]) => {
        res.render("moviesEdit", { Movie: movie, genres })
        // console.log("-----Holaaaaaaaa", response[1])
      })
  },
  update: function (req,res) {
    const { id } = req.params;
    const errores = validationResult(req);
    console.log("errores:", errores);
    if(!errores.isEmpty()){
      const pedidoMovie = db.Movie.findByPk(req.params.id)
    const pedidoGenres = db.Genre.findAll()
    Promise.all([pedidoMovie, pedidoGenres])
      .then(([movie, genres]) => {
        res.render("moviesEdit", { Movie: movie, genres, errores:errores.mapped(),old:req.body })
  
      })
  }
  else{
    db.Movie.update(req.body,
  {
  where: {
    id:req.params.id
  },
})
.then(()=> {
  res.redirect(`/movies/detail/${id}`)
  console.log("Movete deja de jodeeeeeeeee", req.body)
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
