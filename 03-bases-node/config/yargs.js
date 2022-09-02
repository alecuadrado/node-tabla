const { describe } = require('yargs');

const argv = require('yargs')
.option(
    'b', { // b termina siendo el diminutivo de Base. Se representa como b o base por igual.
        alias : 'base',
        type : 'number',
        demandOption : true,
        describe: 'Es la tabla de multiplicar'
    },
    'l', {
        alias: 'listar',
        type: 'boolean' ,
        default: false,
        describe: 'Muestra o no el resultado'
    },
    'h', {
        alias: 'hasta',
        type: 'number' ,
        demandOption: true,
        describe: 'Multiplicador'
})

                    
.check ( (argv, options) => { 
    if (isNaN (argv.b)){
        throw 'La base tiene que ser un numero '
    }
    return true 
})    
.argv; 

module.exports = argv;