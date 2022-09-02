
const empleados = [
    {
        id: 1,
        nombre: 'fernendo'
    },
    {
        id: 2,
        nombre: 'Mariano'
    },
    {
        id: 3,
        nombre: 'Rocio'
    }

];
const salarios = [
    {
        id: 1,
        salarios: 1000
    },
    {
        id: 2,
        salarios:1500     
    }

];


const getEmpleado = (id, callback) => {

    const empleado = empleados.find( (e => e.id === id ))?.nombre;
    
    if (empleado){
        callback(null, empleado);
    }
    else {
        callback( `Empleado con id ${ id } no existe`)
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find(e => e.id === id )?.salarios;
    
    if (salario){
        callback(null, salario); //el null es para comprobar si el primer elemento del callback es el error. De ser true, entonces se pasa al else.
    }
    else {
        callback( `Salario con id ${ id } no existe`)
    }
}


const id = 1;

getEmpleado(id, (err, empleado ) => {
    if (err){
        console.log('error!!')
        return console.log(err);
    }
    console.log(empleado);
    
    getSalario(id, (err, salario) => {
        if (err){
            console.log('Error!!!')
            return console.log(err)
        }
        console.log('El Empleado: ', empleado, 'tiene un salario de:', salario)
    })
})




