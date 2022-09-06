const { resolve } = require('path');

require('colors');


const mostrarMenu = () => {

return new Promise( resolve => {
        console.clear()
        console.log('===================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('====================\n'.green);

        console.log(`${'1'.green}. Crear Tarea`);
        console.log(`${'2'.green}. Listar Tarea`);
        console.log(`${'3'.green}. Listar Tareas Completadas`);
        console.log(`${'4'.green}. Listar tareas pendiendes`);
        console.log(`${'5'.green}. Completar Tarea(s)`);
        console.log(`${'6'.green}. Borar Tarea`);
        console.log(`${'0'.green}. Salir\n`);
        
        const readline = require('readline').createInterface({ //espera el valor del ingreso del usuario antes de finalizar el programa
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => { //caputra el ingreso del usuario
            readline.close();
            resolve(opt);
        })
    });

}

const pausa = () => {
    return new Promise (resolve => {
        const readline = require('readline').createInterface({ //espera el valor del ingreso del usuario antes de finalizar el programa
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar` , (opt) => { //caputra el ingreso del usuario
            readline.close();
            resolve();
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}