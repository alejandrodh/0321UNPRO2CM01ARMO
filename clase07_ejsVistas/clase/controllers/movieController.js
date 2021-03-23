const movieController ={
    index: function(req, res){
        let pelis = [
            'Harry Potter',
            'Tenet',
            'Volver al futuro',
            'End Game',
            'Atrapame si puedes',
            'Hoy,si',
            'Kissing booth'
        ]

        return res.render('movies', {
            peliculas: pelis,
            title: 'UDeSAFlix'
        });
    }


}
module.exports = movieController;