const data = require('../data/science');

const heroeControler = {
    index: function(req, res){
        return res.send(data.lista);
    },
    show: function(req, res){
        let id = req.params.id;
        let resultado = '';

        if(id > data.lista.length){
            resultado =  'No encontramos al científico indicado. Por favor, elija otro id';
            return res.send(resultado);
        } else { //Corremos el for solo si tenemos un id válido
            for(let i = 0; i<data.lista.length; i++){
                if(id == data.lista[i].id){
                    resultado = `Hola, mi nombre es <strong>${data.lista[i].nombre}</strong> y soy <strong>${data.lista[i].profesion}</strong>`;
                    return res.send(resultado);//Pongo el return dentro del if y dentro del for para que corte el bucle y retirne el valor que encontró.
                }
                // console.log('Corrí igual gato.========')
            }
        }

    },
    bio: function(req, res){
        let id = req.params.id;
        let vinoOk = req.params.ok;
        let resultado = '';

        if(id>data.lista.length || id <= 0){
                resultado = 'No encontramos al científico indicado para mostrar su biografía';
                return res.send(resultado);
            } else { //Corremos el for solo si tenemos un id válido.
                for(let i=0; i<data.lista.length; i++){
                    if(id == data.lista[i].id){
                        if(vinoOk == 'ok'){
                            resultado = `<h1>${data.lista[i].nombre}</h1> <p>${data.lista[i].resenia}</p>`; 
                            return res.send(resultado);
                        } else {
                            resultado = 'Lamento que no desees saber más de mi :('
                            return res.send(resultado);
                        }
                    }
                }    
            }
            
    }
}

module.exports = heroeControler