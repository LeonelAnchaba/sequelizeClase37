const db = require("../../database/models");

module.exports  = {
list: (req,res) => {
    try{
        db.Genre.findAll()
        .then((genres) => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "api/genres",
                }, 
                data: {
                    genres
                }      
                })
             })
          } catch (error) {
             return res.status(404).send(error.message);
         }
    
},
detail: (req, res) => {
    try {
        db.Genre.findByPk(req.params.id)
        .then(function (genre) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    url: `api/genres/${req.params.id}`,
                },
                data: {
                    genre
                }
        })
    })
    }catch (error) {
        return res.status(404).send(error.message);
    }

}
    
}