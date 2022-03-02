const fs = require('fs');

let listadoPorHacer = [];


let pruebaMerge = 'hola amigos';

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(toDo);

    guardarDB();


}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    listadoPorHacer = getListado();

    let index = listadoPorHacer.findIndex(x => x.descripcion === descripcion);

    if (index > -1) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;

}

const borrar = (descripcion) => {

    try {
        cargarDB();

        let nuevo = listadoPorHacer.filter(x => x.descripcion !== descripcion);
        if (listadoPorHacer.length === nuevo.length)
            return false;
        else {
            listadoPorHacer = nuevo;
            guardarDB();
            return true;

        }

    } catch (error) {
        return false;
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo guardar', err);
    })

}



const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}