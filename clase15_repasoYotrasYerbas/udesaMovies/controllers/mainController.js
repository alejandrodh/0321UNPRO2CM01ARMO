const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const mainController = {
    index: function(req, res){
        //Nuestro código.
        db.Movie.findAll()
            .then( data => {
                return res.render('index', { movies: data })
            })
            .catch(error =>{
                console.log(error);
            })
    }   


}

module.exports = mainController