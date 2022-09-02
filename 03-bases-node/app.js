const fs = require('fs');


console.clear()

// array = [1,2,3,4,5,6,7,8,9,10,11]
// for (const i in array ){
//     console.log(i*5);
// }

const base = 3;
let salida = ''

for (let i=1; i <= 10; i++){
    salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(salida)

// fs.writeFile( `tabla-del-${base}.txt`, salida, (err) => { //crea el archivo txt con la tabla, deacuerdo al valor de la base
//     if (err) throw err;
//     console.log('tabla-5.txt creado') 
// } )

fs.writeFileSync( `tabla--${base}.txt`, salida); // en caso de Error, usar Try y catch

console.log('Creado')