const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion)
        console.log('crear');
        break;
    case 'listar':
        let listado = todo.getListado();

        listado.forEach(element => {
            console.log('=== por hacer ==='.green);
            console.log(element.descripcion.blue);
            console.log(element.completado);
        });

        break;
    case 'actualizar':

        let resul = todo.actualizar(argv.descripcion, argv.completado);

        if (resul) console.log('ok');
        else console.log('no actualizado');


        break;
    case 'borrar':

        let result = todo.borrar(argv.descripcion);

        if (result) console.log('ok');
        else console.log('no borrado');


        break;

    default:
        console.log('comando no reconocido');
        break;
}