console.log("hola");
console.log("Repaso variable y tipos de datos");


//var nombre = "Maca";

let nombre = "Maca";
//let nombre ="Mariano"//
nombre ="Ale"

const curso = "UdeSA Programación II";
//curso = 3245678;

if (true){
    let nombre ="Mariano"
    console.log(nombre);
}
console.log(nombre)

let number = 5678;
let texto = "f para ale";
let boolean = true;

let nodefinido //devuelve undefined
let nulo = null;
let noEsUnNumero = "hola"/7; //devuelve NAN


let colores = ["amarillo", "rojo", "verde", "blanco"];
console.log(colores[1]);
colores.push("naranja");
console.log(colores);

let alumno = {
    nombre : "Constancio",
    edad : 20,
    nacionalidad : "Arg",
    casado : false,
    saludar : function(){
        return "hola soy Constancio"
    }
}
console.log(alumno.nombre);
console.log(colores.length);

for(let i= 0; i<colores.length; i++){
    console.log(colores[0]);
}

let edad = 40;
edad++;
console.log(edad);
