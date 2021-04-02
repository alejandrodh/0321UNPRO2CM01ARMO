let data = require('../data/bandas');

const bandaController = {
    index: function(req, res){
        let listaBandas = data.lista;
        //devuelve la lista de bandas
        return res.render('listadoBandas', {bandas:listaBandas, title:" todas las bandas"})
    },
    show: function(req,res){
        //devuelve 1 banda
        let id = req.params.id
        let listaBandas = data.lista;
        let resultados = {}
        for(let i=0; i<listaBandas.length; i++){
            if(listaBandas[i].id == id){
                resultados = listaBandas[i];
                return res.render('detalleBanda', {banda: resultados});
            }
        }
        return res.render('detalleBanda')
    },
    genre: function(req, res){
        //devuelve lista de bandas por genero   
        let genero = req.params.genre;
        let listaBandas = data.lista;
        let resultados = [];

        for(let i = 0; i<listaBandas.length; i++){
            if(listaBandas[i].genero == genero){
                resultados.push(listaBandas[i]);
            }
        }
        
        return res.render('listadoBandas', {bandas: resultados, title: " basndas por Género"})
    }

}

module.exports = bandaController;