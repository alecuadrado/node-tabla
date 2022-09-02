const fs = require('fs');

const crearArchivo = async (base = 5, l=1, h=10) => {
    try{
        let salida = ''
        console.log(`Tabla del ${base}`)
        console.log(`----------------`.green)
        
        for (let i=1; i <= h; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        
        }
        if (l === true) {
            console.log(salida);
        }
        
        fs.writeFileSync( `./salida/tabla--${base}.txt`, salida); // en caso de Error, usar Try y catch
        console.log('Archivo Creado');
        return `tabla--${base}.txt`;
    }catch (err){
        throw err;
    }    
}

module.exports = { 
    crearArchivo
}// Permite la importacion del modulo crearArchivo

