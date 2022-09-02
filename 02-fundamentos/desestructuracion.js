
const deadpool = {
    nombre: 'Wade',
    apellido : 'Wilson',
    poder: 'Regeneracion',
    edad: 50,
    getNombre (){
        return `${this.nombre } ${this.apellido} ${this.poder}`;
    }

}

// console.log(deadpool.getNombre()) ;

function imprimeHeroe({nombre, apellido, poder, edad}) { // Desetructuracion de daatos. Se pueden utilizar las varaiables por separado. 
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman']; // Desestructuracion de datos de un array

const h1 = heroes[0];

const [a, b, c] = heroes;
console.log(b)