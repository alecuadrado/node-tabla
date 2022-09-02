
setTimeout( () => {
    console.log('Hola Mund');
}, 1000); 


const getUsuarioById = (id, callback) => {
    const usuario = { //la constante y manda el contenido, a callback, y este devuelve los datos luego del timeout
        id,
        nombre: 'Alejandro'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500)

}

getUsuarioById(10 , (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})