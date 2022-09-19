let adivinarnumero = Math.random() * (11 - 1) + 1
const numerooculto = document.querySelector('#adivinar2')
numerooculto.value = Math.floor(adivinarnumero)
let pantallaInicio = document.querySelector('#pantalla-inicio')
let contenedorInicio = document.querySelector('#contenedor-inicio')
let jugadoresInput = document.querySelector('#jugador-nombre')
let iniciarJuego = document.querySelector('#comenzar-juego')
let nombres;

let arrayJugadores = JSON.parse(localStorage.getItem("listaJugadores")) || [];
let tablaJugadores = document.querySelector('#lista-jugadores')
const crearListaJugadores = (jugadoresACrear) => {
    tablaJugadores.innerHTML += `<tr>
    <td>${jugadoresACrear.nombre}</td>
    <td>${jugadoresACrear.intentosJugador}</td>
</tr>`
}


iniciarJuego.addEventListener("click", () => {
    if (jugadoresInput.value == "") {
        alert("Por favor ingrese un nombre para jugar.")
    } else {
        nombres = jugadoresInput.value
        contenedorInicio.style.transform = "translatey(-250%)"
        verJugadores.style.zindex = "1"
        verJugadores.style.bottom = "4%"
        setTimeout(() => {
            pantallaInicio.style.visibility = "hidden";
        }, 1000)
    }
})

jugadoresInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        if (jugadoresInput.value == "") {
            alert("Por favor ingrese un nombre para jugar.")
        } else {
            nombres = jugadoresInput.value
            contenedorInicio.style.transform = "translatey(-250%)"
            verJugadores.style.zindex = "1"
            verJugadores.style.bottom = "4%"
            setTimeout(() => {
                pantallaInicio.style.visibility = "hidden";
            }, 1000)
        }
    }
})

const frio1 = document.querySelector('#frio1')
const frio2 = document.querySelector('#frio2')
const frio3 = document.querySelector('#frio3')
const frio4 = document.querySelector('#frio4')
const frio5 = document.querySelector('#frio5')
const frio6 = document.querySelector('#frio6')
const frio7 = document.querySelector('#frio7')
const frio8 = document.querySelector('#frio8')
let paresFrios = [];
let imparesFrios = [];
paresFrios.push(frio2, frio4, frio6, frio8)
imparesFrios.push(frio1, frio3, frio5, frio7)

const caliente1 = document.querySelector('#caliente1')
const caliente2 = document.querySelector('#caliente2')
const caliente3 = document.querySelector('#caliente3')
const caliente4 = document.querySelector('#caliente4')
const caliente5 = document.querySelector('#caliente5')
const caliente6 = document.querySelector('#caliente6')
const caliente7 = document.querySelector('#caliente7')
const caliente8 = document.querySelector('#caliente8')
let paresCaliente = [];
let imparesCaliente = [];
paresCaliente.push(caliente2, caliente4, caliente6, caliente8)
imparesCaliente.push(caliente1, caliente3, caliente5, caliente7,)

let cambiargradiente1 = ["to right, "]
let porcentaje = 100
let intentos = 0;


const usuarioNu = document.querySelector('#intentar5')

function adivinar1() {

    var lista = [0, 1, 2, 3];
    lista.sort(function () { return Math.random() - 0.5 });
    class Jugador {
        constructor (nombre, intentosJugador){
            this.nombre = nombre,
            this.intentosJugador = intentosJugador
        }
    }

    if (intentos >= 5) {
        alert("Alcanzo el maximo de intentos")
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)600%)`
        ocultarpregunta.toggleAttribute("hidden")
        botonprobador.toggleAttribute("disabled")
        let jugadores = new Jugador (nombres, intentos)
        arrayJugadores.push(jugadores)
        localStorage.setItem("listaJugadores", JSON.stringify(arrayJugadores));
    } else if (usuarioNu.value == numerooculto.value) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)0%)`
        alert('Felicidades Adivinaste el numero')
        intentos++
        document.getElementById("losintentos").value = `Numero de Intentos: ${intentos} en acertar el numero.`
        ocultarpregunta.toggleAttribute("hidden")
        botonprobador.toggleAttribute("disabled")
        let jugadores = new Jugador (nombres, intentos)
        arrayJugadores.push(jugadores)
        localStorage.setItem("listaJugadores", JSON.stringify(arrayJugadores));
    } else if (usuarioNu.value > 10 || usuarioNu.value <= 0 || isNaN(usuarioNu.value)) {
        alert('Por favor Ingrese un valor numerico entre el 1 y el 10')
        usuarioNu.value = ""
    } else if ((numerooculto.value - usuarioNu.value >= 1 && numerooculto.value - usuarioNu.value <= 2) || (usuarioNu.value - numerooculto.value >= 1 && usuarioNu.value - numerooculto.value <= 2)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje - 15}%)`
        porcentaje -= 15
        intentos++
        usuarioNu.value = ""
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
        let mostrarCaliente = () => imparesCaliente[lista[0]].style.opacity = "0"
        let mostrarCaliente1 = () => imparesCaliente[lista[1]].style.opacity = "0"
        let mostrarCaliente2 = () => paresCaliente[lista[2]].style.opacity = "0"
        let mostrarCaliente3 = () => paresCaliente[lista[3]].style.opacity = "0"
        imparesCaliente[lista[0]].style.opacity = "1"
        imparesCaliente[lista[1]].style.opacity = "1"
        paresCaliente[lista[2]].style.opacity = "1"
        paresCaliente[lista[3]].style.opacity = "1"
        setTimeout(mostrarCaliente, 2000)
        setTimeout(mostrarCaliente1, 2000)
        setTimeout(mostrarCaliente2, 2000)
        setTimeout(mostrarCaliente3, 2000)
        alert('Muy caliente')
    } else if ((numerooculto.value - usuarioNu.value >= 3 && numerooculto.value - usuarioNu.value <= 5) || (usuarioNu.value - numerooculto.value >= 3 && usuarioNu.value - numerooculto.value <= 5)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje - 15}%)`
        porcentaje -= 15
        intentos++
        alert('Caliente')
        usuarioNu.value = ""
        document.getElementById("losintentos").value = `Intentos: ${intentos}`;
        let mostrarCaliente = () => imparesCaliente[lista[0]].style.opacity = "0"
        let mostrarCaliente1 = () => imparesCaliente[lista[1]].style.opacity = "0"
        let mostrarCaliente2 = () => paresCaliente[lista[2]].style.opacity = "0"
        let mostrarCaliente3 = () => paresCaliente[lista[3]].style.opacity = "0"
        imparesCaliente[lista[0]].style.opacity = "1"
        imparesCaliente[lista[1]].style.opacity = "1"
        paresCaliente[lista[2]].style.opacity = "1"
        paresCaliente[lista[3]].style.opacity = "1"
        setTimeout(mostrarCaliente, 2000)
        setTimeout(mostrarCaliente1, 2000)
        setTimeout(mostrarCaliente2, 2000)
        setTimeout(mostrarCaliente3, 2000)
    } else if ((numerooculto.value - usuarioNu.value >= 6 && numerooculto.value - usuarioNu.value <= 7) || (usuarioNu.value - numerooculto.value >= 6 && usuarioNu.value - numerooculto.value <= 7)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje + 35}%)`
        porcentaje += 35
        intentos++
        alert('Frio')
        usuarioNu.value = ""
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
        let mostrarFrio = () => imparesFrios[lista[0]].style.opacity = "0"
        let mostrarFrio1 = () => imparesFrios[lista[1]].style.opacity = "0"
        let mostrarFrio2 = () => paresFrios[lista[2]].style.opacity = "0"
        let mostrarFrio3 = () => paresFrios[lista[3]].style.opacity = "0"
        imparesFrios[lista[0]].style.opacity = "1"
        imparesFrios[lista[1]].style.opacity = "1"
        paresFrios[lista[2]].style.opacity = "1"
        paresFrios[lista[3]].style.opacity = "1"
        setTimeout(mostrarFrio, 2000)
        setTimeout(mostrarFrio1, 2000)
        setTimeout(mostrarFrio2, 2000)
        setTimeout(mostrarFrio3, 2000)
    } else if ((numerooculto.value - usuarioNu.value >= 8 && numerooculto.value - usuarioNu.value <= 10) || (usuarioNu.value - numerooculto.value >= 8 && usuarioNu.value - numerooculto.value <= 10)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje + 35}%)`
        porcentaje += 35
        intentos++
        alert('Muy frio')
        usuarioNu.value = ""
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
        let mostrarFrio = () => imparesFrios[lista[0]].style.opacity = "0"
        let mostrarFrio1 = () => imparesFrios[lista[1]].style.opacity = "0"
        let mostrarFrio2 = () => paresFrios[lista[2]].style.opacity = "0"
        let mostrarFrio3 = () => paresFrios[lista[3]].style.opacity = "0"
        imparesFrios[lista[0]].style.opacity = "1"
        imparesFrios[lista[1]].style.opacity = "1"
        paresFrios[lista[2]].style.opacity = "1"
        paresFrios[lista[3]].style.opacity = "1"
        setTimeout(mostrarFrio, 2000)
        setTimeout(mostrarFrio1, 2000)
        setTimeout(mostrarFrio2, 2000)
        setTimeout(mostrarFrio3, 2000)
    }
}

document.querySelector('#botonprobador').addEventListener("click", adivinar1)
document.querySelector('#intentar5').addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        adivinar1()
    }
})

const verJugadores = document.querySelector('#listaDeJugadores');
const contenedorModal = document.querySelector(".contenedor-modal");
const modalLista = document.querySelector(".modal-lista");
const cerrador = document.querySelector("#cerrador");

verJugadores.addEventListener("click", function (e) {
    e.preventDefault();
    contenedorModal.style.opacity = "1"
    contenedorModal.style.visibility = "visible"
    modalLista.style.transform = "translatex(0%)"
    arrayJugadores.forEach(element => {
        crearListaJugadores(element);
    });
})

cerrador.addEventListener("click", () => {
    modalLista.style.transform = "translatex(250%)"

    setTimeout(function () {
        contenedorModal.style.visibility = "hidden"
        contenedorModal.style.opacity = "0"
        modalLista.style.transform = "translatex(-250%)"
        tablaJugadores.innerHTML = `<th class="px-4 border-bottom">Jugador</th>
        <th class="px-4 border-bottom border-start">Intentos</th>`
    }, 1000)
}
)

contenedorModal.addEventListener("click", () => {
    modalLista.style.transform = "translatex(250%)"

    setTimeout(function () {
        contenedorModal.style.visibility = "hidden"
        contenedorModal.style.opacity = "0"
        modalLista.style.transform = "translatex(-250%)"
        tablaJugadores.innerHTML = `<th class="px-4 border-bottom">Jugador</th>
        <th class="px-4 border-bottom border-start">Intentos</th>`
    }, 1000)
}
)

const volverAJugar = document.querySelector('#otraVez');

volverAJugar.addEventListener("click", () => location.reload())