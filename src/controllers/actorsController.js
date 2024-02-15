const db = require("../database/models");

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
}
}