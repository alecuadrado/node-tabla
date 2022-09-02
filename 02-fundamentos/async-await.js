
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

const getInfoUsuario = async(id) => { // Transforma una funcion, que retorna una promesa
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `El empleado ${ empleado } es de ${salario}`
    } catch (error) {
        throw error; //throw, devuelve el reject de la funcion asincrona
    }

}

getInfoUsuario(id)
    .then( msg => {
        console.log('Todo Bien!')
        console.log(msg)})
    .catch (err => {
        console.log('Todo Mal')
        console.log(err)})



