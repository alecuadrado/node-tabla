import colors from 'colors';
import inquirerMenu from './helpers/inquirer.js';
import pausa from './helpers/inquirer.js';


console.clear()

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        await pausa();

        // if (opt !== '0') await pausa();
    } while (opt !== '0');

    //pausa();

}

main();