let autos = {
    lista: [
        {
            modelo:'bora',
            marca:'vw',
            color:'',
            anio:2020,
            describirse: function(){
                return "hola soy el auto modelo " + autos.lista[0].modelo + " ";
            } //Pueden hacer un método para cada auto o uno general que recorra y describa a todos.
    },
            {
            modelo:'gol',
            marca:'vw',
            color:'',
            anio:2019,
            describirse: function(){
                return "hola soy el auto modelo " + autos.lista[1].modelo + " ";
            }
    },
    ],
    // describirse : function(){
    //     //Pueden hacer un método genérico para recorrer el arrya y describir a cada auto.
    //     //Tu código acá
    // },
    porColor: function(color){
        //....
        //Tu código acá.
    },
    porMarca: function(marca){
        //...
        //Tu código acá.
    }


}

module.exports = autos;
// console.log(autos);