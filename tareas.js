const tareas = [];

function mostrarTarea() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. [${tarea.completado ? 'X' : ' '}] ${tarea.descripcion}`);
  });
}

function agregarTarea(descripcion) {
  tareas.push({ descripcion, completado: false });
  console.log(`Tarea "${descripcion}" añadida.`);
}

function eliminarTarea(index) {
  if (index >= 0 && index < tareas.length) {
    const eliminarTarea = tareas.splice(index, 1);
    console.log(`Tarea "${eliminarTarea[0].descripcion}" eliminada.`);
  } else {
    console.log('Índice de tarea no válido.');
 }
}

function completarTarea(index) {
  if (index >= 0 && index < tareas.length) {
    tareas[index].completado = true;
    console.log(`Tarea "${tareas[index].descripcion}" completada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

module.exports = {
    mostrarTarea: mostrarTarea,
    agregarTarea: agregarTarea,
    eliminarTarea: eliminarTarea,
    completarTarea: completarTarea
}