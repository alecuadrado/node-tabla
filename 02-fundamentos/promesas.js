
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


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        const empleado = empleados.find( (e => e.id === id ))?.nombre;
        
        (empleado) 
            ? resolve(empleado)
            : reject (`No Existe el empleado con el id ${ id }`);
    });
    
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salarios;
        
        (salario) 
            ? resolve(salario)
            : reject (`No Existe el empleado con el id ${ id }`);
    });
    
}



const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch( err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch( err => console.log(err));

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
        
    .then( salario => console.log('El empleado', nombre, 'gana: ', salario))
    .catch (err => console.log(err));