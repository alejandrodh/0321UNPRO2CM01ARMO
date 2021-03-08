let calculadora = {
    descripción : 'Mi primer calculadora en NodeJS',
    sumar: function(num1, num2){ //Función con sintaxis tradicional
        return num1+num2;
    },

    multiplicar: (num1, num2) => { //Función con sintaxis arrow con return explícito
        return num1*num2;
    },

    dividir: (num1, num2) => num1/num2, //Función con sintaxis arrow con return implícito.

}

module.exports = calculadora;