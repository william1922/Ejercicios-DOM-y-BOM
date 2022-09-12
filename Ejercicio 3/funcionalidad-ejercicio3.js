

let hora = [];
for (var i = 4; i < 24; i++) {
    hora += (Date()[i])
}

let valorDelImput = document.querySelector('#tarea');
let tareas = document.querySelector('#tabla');
const iniciador = () => {
    crearTareas = document.createElement('tr');
    crearTareasLinea = document.createElement('td');
    crearTareasLinea.innerHTML = valorDelImput.value;

    crearTareasLinea.setAttribute("class", "elementos-lista col-9 px-4");
    crearTareas.appendChild(crearTareasLinea);
    crearTareas.appendChild(crearTareasLinea.cloneNode(true))
    crearTareas.getElementsByTagName("td")[1].innerHTML = hora;
    crearTareas.getElementsByTagName("td")[1].setAttribute("class", "elementos-lista1 text-center col-3")
    tareas.appendChild(crearTareas);
    valorDelImput.value = ""
}


valorDelImput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        if(valorDelImput.value == ''){
            alert("Ingrese la tarea a guardar")
        } else {
        iniciador()
        valorDelImput.value = ""
        }
    }
})

const botoncrear = document.querySelector('#tareaguardar')
botoncrear.addEventListener("click", () =>{
    if(valorDelImput.value == ''){
        alert("Ingrese la tarea a guardar")
    } else {
    iniciador()
    valorDelImput.value = ""
    }
})

const eliminador = document.querySelector('#tareaeliminar')

eliminador.addEventListener("click", () => {
   let aEliminar = tareas.lastChild
    if (aEliminar == null) {
        alert('No a ingresado tareas')
    } else {
        tareas.removeChild(aEliminar)
    }
})
