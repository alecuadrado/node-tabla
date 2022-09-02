// const { type } = require('os');
// const { argv } = require('process');
const { type } = require('os');
const { demandOption, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv =require('./config/yargs');
const colors = require('colors')

console.clear();


// const [ , , arg3 =  'base = 5' ] = process.argv; //es una mala practica tomar los datos por posicion; Si hay mas datos, se complica
// const [ , base = 5] = arg3.split('=');


// console.log( process.argv );
console.log(argv);
// console.log('base: yargs', argv.base )  ; // muestra los datos como key:value dentro de un array

const base = 6;

crearArchivo ( argv.b, argv.l, argv.h )
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'Archivo Grabado'))
    .catch ( err => console.log(err) );

