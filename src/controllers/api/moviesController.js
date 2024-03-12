const db = require("../../database/models");


module.exports = {
    list: (req, res) => {
        try {
            db.Movie.findAll()
                .then(movies => {
                    res.status(200).json({
                        meta: {
                            status: 200,
                            total: movies.length,
                            url: "api/movies",
                        }, 
                        data: {
                            movies,
                        }    
                    })
                })
        } catch (error) {
            return res.status(404).send(error.message);
        }
        
    },
    detail: (req, res) => {
        try {
            db.Movie.findByPk(req.params.id)
            .then(movie => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: `api/movies/${req.params.id}`,
                    },
                    data: {
                        movie
                    }
                });
            });
        }catch (error) {
            return res.status(404).send(error.message);
        }
        
    },
    create: (req,res) => {
        try {
            db.Movie.create(req.body)
            .then((movie)=> {
                return res.status(200).json({
                    status: 200,
                    data: movie
                })})            
            .catch(error => res.send(error))
        } catch (error) {
            return res.status(404).send(error.message);
        }
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
        db.Movie.destroy({where: {id: movieId}})
        .then((response)=>{
            return res.status(200).json(response)})
        
   }
}