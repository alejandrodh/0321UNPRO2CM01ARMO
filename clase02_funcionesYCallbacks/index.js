function saludar(nombre, apellido){   
    return "Hola" + " " + nombre + " "+  apellido
}

let firstName = "Ale";
let lastName = "Vivone"

let saludo = saludar(firstName, lastName);

//console.log(saludo);

let profe = {
    nombre: "Maca",
    apellido: "Armijo",
    despertar: function(){
        return "Hola " + profe.nombre + " " + profe.apellido + ", " + "despertate"
    }
}
//console.log(profe.despertar());

function saludarConNombre(nombre){
    return "Hola " + nombre;
}

let nombreDeAlumnos = ["Ale", "Maca", "Emilio", "Mateo", "Martin", "Santiago"]

for (let i=0; i<nombreDeAlumnos.length; i++){
    console.log(saludarConNombre(nombreDeAlumnos[i]));
}

let arrayAlumnos =[
    {
    nombre: "Maca",
    apellido: "Armijo"
    },
    {
    nombre: "Ale",
    apellido: "Vivone"
    },
    {
    nombre: "Mateo",
    apellido: "Moragues"
    },
    {
    nombre: "Emilio",
    apellido: "Molina"
    },
]

for (let i=0; i<arrayAlumnos.length; i++){
   console.log( saludarConNombre(arrayAlumnos[i].nombre)) 
}

//CAllbacks
function sumar(num1, num2){
    return num1+num2
}

function multiplicar(num1, num2){
    return num1*num2
}

//console.log(sumar(2,3));
//console.log(multiplicar(8,9));


function calculadora(num1, num2, operation){
    return operation(num1, num2)
}

console.log(calculadora(2,3,saludar));