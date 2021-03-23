const mainController = {
    index: function(req, res){
      return res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
    },
    creditos: function(req, res){
        return res.send('Website de personalidades por Maca Armijo y Ale Vivone')
    }
}

module.exports = mainController;