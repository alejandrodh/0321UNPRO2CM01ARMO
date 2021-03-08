const fs = require('fs'); //Filesystem (FS)es un modulo nativ
const popularMovieQuotes = require('popular-movie-quotes');
const calculadora = require('./calculadora/calculadora');

let data1 = 20;
let data2 = 40;

let suma = calculadora.sumar(data1, data2);



console.log(suma);