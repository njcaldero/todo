const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demanda: true,
            alias: 'd',
            desc: 'tarea por hacer'
        }
    })
    .command('actualizar', 'actualizar un elemento por hacer', {
        descripcion: {
            demanda: true,
            alias: 'd',
            desc: 'tarea por actualizar'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marcar como completado'
        }
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion: {
            demanda: true,
            alias: 'd',
            desc: 'tarea por borrar'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}