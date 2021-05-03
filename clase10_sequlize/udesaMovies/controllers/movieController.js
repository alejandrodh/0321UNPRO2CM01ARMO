const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const movieController = {
    show: function(req, res){
        let id = req.params.id;

        db.Movie.findByPk(id)
            .then(data =>{
                return res.render('movie', { movie: data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    }   


}

module.exports = movieController