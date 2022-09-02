// function sumar(a, b = 10) {
//     return a+b
// }

const sumar = (a, b =10) =>  a + b;  // la funcion de flecha, evita poner las {} y el return queda implicito

console.log(sumar (15));