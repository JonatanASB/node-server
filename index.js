var readlineSync = require('readline-sync');

const { mostrarTarea, agregarTarea, eliminarTarea, completarTarea } = require('./tareas.js');


function prinicpal() {

    while (true) {
        console.log('Bienvenido a la Lista de Tareas.');
        console.log("Menu");
        console.log("1: Añadir tarea");
        console.log("2: Completar tarea");
        console.log("3: Mostrar tareas");
        console.log("4: Eliminar tareas");
        console.log("5 Salir");

        const opcion = readlineSync.questionInt("Selecciona una opcion: ");

        switch (opcion) {
            case 1:
                const descripcion = readlineSync.question('Ingrese la descripción de la tarea: ');
                agregarTarea(descripcion);
                // console.clear();
                break;
            case 2:
                const tareaCompleta = parseInt(readlineSync.question('Ingrese el número de la tarea a completar: ')) - 1;
                completarTarea(tareaCompleta);
                break;
            case 3:
                mostrarTarea();
                break;
            case 4:
                const eliminarIndice = parseInt(readlineSync.question('Ingrese el número de la tarea a eliminar: ')) - 1;
                eliminarTarea(eliminarIndice);
                break;

            default:
                console.log('Opción no válida.');
                break;
        }
    }
}

prinicpal();
