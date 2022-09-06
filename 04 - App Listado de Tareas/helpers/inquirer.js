import inquirer from 'inquirer';
import colors from 'colors';


const preguntas = [{
    type: 'list',
    name: 'opt',
    message: 'Que desea hacer?',
    choices: [
        {
            value: '1',
            name: '1.Crear Tarea',
        },
        {
            value: '2',
            name: '2.Listar Tarea',
        },
        {
            value: '3',
            name: '3.Listar Tareas Completadas',
        },
        {
            value: '4',
            name: '4.Listar Tareas Pendientes',
        },
        {
            value: '5',
            name: '5.Completar Tareas',
        },
        {
            value: '6',
            name: '6.Borrar Tareas',
        },
        {
            value: '0',
            name: '0.Salir'
        }
    ]

}
];


const inquirerMenu = async() => {
    console.clear();
    console.log('===================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('====================\n'.green);

    const {opt} = await inquirer.prompt(preguntas);

    return opt;


}

const pausa = async () => {
    const question= [
        {
            type: 'input',
            name: '',
            message: `Presione ${'enter.green'} para continuar`
        }
    ]

    await inquirer.prompt(question);
}



export default inquirerMenu;
