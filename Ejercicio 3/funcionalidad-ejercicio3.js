


const iniciador = () => {let hora = [];
/*for(var i = 4; i < 24; i++){
    hora+=(Date()[i])
}*/
let crearTareas = document.createElement('tr');
crearTareas.innerHTML += document.querySelector('#tarea').value.toUpperCase();
document.querySelector('#tarea').value = ""
crearTareas.setAttribute("class", "elementos-lista")
document.querySelector('#tabla').appendChild(crearTareas)

}


const eliminar = () => {
    let aEliminar = document.querySelector('#tabla').lastChild
    if (aEliminar == null) {
        alert('No a ingresado tareas')
    } else {
        document.querySelector('#tabla').removeChild(aEliminar)
    }
}

document.querySelector('#tarea').addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        iniciador()
    }
})
