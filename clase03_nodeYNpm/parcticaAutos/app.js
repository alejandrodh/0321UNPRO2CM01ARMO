const autos = require('./autos/autos');

//console.log(autos);

for(let i=0; i<autos.lista.length; i++){
    console.log(autos.lista[i].describirse());
}