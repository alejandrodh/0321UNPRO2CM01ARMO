const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

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
        
    } ,
    new: function(req, res){
        //últimas 5 películas ordenadas según su fecha de estreno. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
        db.Movie.findAll({
           order: [
               ['release_date', 'DESC']
           ],
           limit: 5,
        })
            .then(data =>{
                return res.render('new', {movies: data, title: 'Estrenos'})
            })
            .catch( error => {
                console.log(error);
            })
    },
    recomended: function(req, res){
        // Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.

        db.Movie.findAll({
            where: [
                { rating: {[op.gte]: 8}}
            ],
            order:[
                ['rating', 'DESC']
            ]
        })
            .then(data =>{
                return res.render('new', { movies : data, title: 'Recomendadas'})
            })
            .catch( error => {
                console.log(error);
            })
    }  


}

module.exports = movieController