let valorDelImput = document.querySelector('#tarea');
let tareas = document.querySelector('#tabla');
let arrayTareas = JSON.parse(localStorage.getItem("listaTareas")) || [];
class TareasLista {
    constructor(texto, fecha) {
        this.texto = texto,
            this.fecha = fecha
    }
}

const iniciador = () => {
    let hora = [];
    for (var i = 4; i < 24; i++) {
        hora += (Date()[i])
    }
    const filasTarea = new TareasLista(valorDelImput.value, hora)
    arrayTareas.push(filasTarea)

    localStorage.setItem("listaTareas", JSON.stringify(arrayTareas))
    valorDelImput.value = ""
    location.reload()
}


const crearTareasLista = () => {
    arrayTareas.forEach(element => {
        crearTareas = document.createElement('tr');
        crearTareasLinea = document.createElement('td');
        crearTareasLinea.innerHTML = element.texto
        crearTareasLinea.setAttribute("class", "elementos-lista col-9 px-4");
        crearTareas.appendChild(crearTareasLinea);
        crearTareas.appendChild(crearTareasLinea.cloneNode(true))
        crearTareas.getElementsByTagName("td")[1].innerHTML = element.fecha
        crearTareas.getElementsByTagName("td")[1].setAttribute("class", "elementos-lista1 text-center col-3")
        tareas.appendChild(crearTareas);
    });
}

valorDelImput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        if (valorDelImput.value == '') {
            alert("Ingrese la tarea a guardar")
        } else {
            iniciador()
            valorDelImput.value = ""
        }
    }
})

const botoncrear = document.querySelector('#tareaguardar')

botoncrear.addEventListener("click", () => {
    if (valorDelImput.value == '') {
        alert("Ingrese la tarea a guardar")
    } else {
        iniciador()
        valorDelImput.value = ""
    }
})

const eliminador = document.querySelector('#tareaeliminar')

eliminador.addEventListener("click", () => {
    if (arrayTareas.length == 0) {
        alert('No a ingresado tareas')
    } else {
        arrayTareas.pop()
        localStorage.setItem("listaTareas", JSON.stringify(arrayTareas))
        location.reload()
    }
})

crearTareasLista()