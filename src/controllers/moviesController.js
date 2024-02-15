const db = require("../database/models");

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
  }
};
