import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.cjs';
import {inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
// import { Tarea } from './models/tarea.js';



console.clear()

const main = async () => {
    let opt = '';
    const tareas = new Tareas(); // esto es lo que mantiene las tareas en memmoria y no persistentes. O sea que se borran al salir del programa
    const tareasDB = leerDB();

    if (tareasDB){//cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    do {
        //imprime el menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion del mensaje: ');
                tareas.crearTarea(desc);
            break;
            case '2':
                tareas.listadoCompleto();
            break;
            
            case '3': //listar completados
                tareas.listarPendientesCompletadas(true);
            break;
            
            case '4': //listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            
            case '5': //Tareas Completadas
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                console.log(ids)
            break;
            
            case '6': //listar pendientes
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0'){
                    const ok = await confirmar('Esta Seguro? ');
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('tarea borrada');
                    }
                }
            break;
            
        }
        
        guardarDB(tareas.listadoArr);

        await pausa();
    } while (opt !== '0');

    //pausa();

}

main();