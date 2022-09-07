import { leerDB } from "../helpers/guardarArchivo.cjs";
import { Tarea } from "./tarea.js";


class Tareas {

    _listado= {} ;

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => { //recorre el array, cada string
            const tarea = this._listado[key]; // pone el la constante tarea, cada Key para pushearla
            listado.push(tarea ) // carga el listado con los objetos tareas
        });
        return listado;
    }
    
    constructor() {
        this._listado = {};

    }

    borrarTarea(id = '') {
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray ( tareas = [] ){ 
        tareas.forEach(tarea => {
        this._listado [tarea.id] = tarea;
    });


    }

    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado [tarea.id] = tarea;

    }

    listadoCompleto () {
        
        this.listadoArr.forEach((tarea, i) => {
            const idx = i + 1
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completado'.green    
                                : 'Pendiente'.red;
            console.log(`${idx} ${desc} '::' ${estado}` );

        }); 
        
    }

    listarPendientesCompletadas (completadas){
        let contador = 0
        
        this.listadoArr.forEach(tarea => {

            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if (completadas) {
                if (completadoEn) {
                    contador +=1;
                    console.log(`${contador.toString().green} ${desc} '::' ${estado}` );

                }
                
            } else {
                if (!completadoEn) {
                    contador +=1;
                    console.log(`${contador.toString().green} ${desc} '::' ${estado}` );

                }
            
            };
            
                
        });                

    }

    toggleCompletadas( ids = [] ){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        });

    this.listadoArr.forEach(tarea => {
        if (!ids.includes(tarea.id)){
            this._listado[tarea.id].completadoEn = null;
        }



    })
    }
}



export{Tareas}