const db = require("../database/models");

module.exports  = {
list: (req,res) => {
    db.Genre.findAll({
      order: [["name"]]
    })
    .then((genres) => {
        res.render("genresList",{genres})
    })
    .catch(err => {
        console.log(err)
         res.send("Se detectó un error con los géneros")
        
    })

},
detail: (req, res) => {
    db.Genre.findByPk(req.params.id)
      .then(function (genre) {
        res.render("genresDetail", { genre });
      })
      .catch((err) => {
        console.log(err);
        res.send("Se detectó un error en el detalle");
      });

}
}