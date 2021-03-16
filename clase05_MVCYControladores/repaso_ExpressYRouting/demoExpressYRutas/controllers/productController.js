const autos = require('../autos/index');

const productController = {

    listaAutos: function(req, res){
    return res.send(autos.lista)
    },

    AutosPorMarca: function(req, res){
    let resultados = [];
        for(let i=0; i < autos.lista.length; i++){
            if(req.params.marca == autos.lista[i].marca){
                resultados.push(autos.lista[i])
            }
        } //Ya tendriamos los resultdos en el array

        if(resultados.length == 0){
            resultados = `Por el momento no hay autos de la marca: ${req.params.marca}`
        }

        return res.send(resultados);
    },

    AutosPorColor: function(req, res){
        let resultados = [];
        for(let i=0; i < autos.lista.length; i++){
            if(req.params.color == autos.lista[i].color){
                resultados.push(autos.lista[i])
            }
        } //Ya tendriamos los resultdos en el array

        if(resultados.length == 0){
            resultados = `Por el momento no hay autos del color: ${req.params.color}`
        }

        return res.send(resultados);
    },

    AutosPorAnio: function(req, res){
        let resultados = [];
        for(let i=0; i < autos.lista.length; i++){
            if(req.params.anio == autos.lista[i].anio){
                resultados.push(autos.lista[i])
            }
        } //Ya tendriamos los resultdos en el array

        if(resultados.length == 0){
            resultados = `Por el momento no hay autos del año: ${req.params.anio}`
        }

        return res.send(resultados)
    },

    productosPorMarca: function (req, res){
    //return res.send(`Estás viendo los productos de la marca ${req.params.pepe}`)
    return res.send("Estas viendo los productos de la marca " + req.params.pepe);
    },

    listaDeMarcas: function(req, res){
    return res.send('Estas viendo todas las marcas de los productos');
    },
    
    index: function(req, res){
    return res.send("Estás en la página de productos");
    },
    show: function(req,res){
        return res.send("producto id: ");
    }
}

module.exports = productController;