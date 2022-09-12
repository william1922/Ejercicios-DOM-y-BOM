
let sujetos =[];
let imagen = document.createElement('img')
let textonuevo = document.createElement('h1');
textonuevo.setAttribute("class", "text-center")
imagen.setAttribute("class", "rounded-5")
let nodo2 = document.querySelector('.mostradorMetodos')

const crearObjeto = () =>{
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre,
        this.edad = edad,
        this.dni = dni,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.nacimiento = nacimiento
    }
    mostrarGeneracion(){
        if(this.nacimiento > 1993 && this.nacimiento < 2011){
            textonuevo.innerHTML =  this.nombre + " Es de la generacion Z y el rasgo de esta generacion es que son Irreverentes"
            imagen.setAttribute("src","/img/generacionZ.png")
            nodo2.appendChild(textonuevo)
            nodo2.appendChild(imagen)
        } else if (this.nacimiento > 1980 && this.nacimiento < 1994){
            textonuevo.innerHTML = this.nombre + " Es de la generacion Y-Millennials y el rasgo de esta generacion es la Frustracion";
            imagen.setAttribute("src", "/img/generacionY.png")
            nodo2.appendChild(textonuevo)
            nodo2.appendChild(imagen)
        } else if (this.nacimiento > 1968 && this.nacimiento < 1981){
            textonuevo.innerHTML = this.nombre + " Es de la generacion X y el rasgo de esta generacion es la Obsesion por el Exito"
            imagen.setAttribute("src", "/img/generacionX.png")
            nodo2.appendChild(textonuevo)
            nodo2.appendChild(imagen)
        } else if (this.nacimiento > 1948 && this.nacimiento < 1969){
            textonuevo.innerHTML = this.nombre + " Es de la generacion Baby Boom y el rasgo de esta generacion es la Ambicion"
            imagen.setAttribute("src", "/img/generacionBB.png")
            nodo2.appendChild(textonuevo)
            nodo2.appendChild(imagen)
        } else if (this.nacimiento > 1929 && this.nacimiento < 1949){
            textonuevo.innerHTML = this.nombre + " Es de la generacion Silent Generation(Los niños de la posguerra) y el rasgo de esta generacion es  la Austeridad"
            imagen.setAttribute("src", "/img/generacionSG.png")
            nodo2.appendChild(textonuevo)
            nodo2.appendChild(imagen)
        }
    }
    esMayorDeEdad(){
        if(this.edad < 18){
            textonuevo.innerHTML = " Es menor de edad"
            nodo2.appendChild(textonuevo)
            if(nodo2.getElementsByTagName('img').length > 0){
                nodo2.removeChild(imagen)
                }
        } else {
            textonuevo.innerHTML = " Es mayor de edad"
            nodo2.appendChild(textonuevo)
            if(nodo2.getElementsByTagName('img').length > 0){
            nodo2.removeChild(imagen)
            }
        }
    }
    mostrarDatos(){
        textonuevo.innerHTML = "Nombre: " + this.nombre + "<br>" + "Edad: " + this.edad + "<br>" + "DNI: " + this.dni + "<br>" + "Sexo: " + this.sexo + "<br>" + "Peso: " + this.peso + " Kilos" + "<br>" + "Altura: " + this.altura + " centimetros" +"<br>" + "Año de nacimiento: " + this.nacimiento;
        if(nodo2.getElementsByTagName('img').length > 0){
            nodo2.removeChild(imagen)
            }
    }
}



let nombre = document.querySelector('#nombre').value;
let edad = document.querySelector('#edad').value;
let dni = document.querySelector('#dni').value;
let sexo = document.querySelector('#sexo').value;
let peso = document.querySelector('#peso').value;
let altura = document.querySelector('#altura').value;
let nacimiento = document.querySelector('#nacimiento').value;

if (nombre.includes(0) || nombre.includes(1) || nombre.includes(2) || nombre.includes(3) || nombre.includes(4) || nombre.includes(5) || nombre.includes(6) || nombre.includes(7) || nombre.includes(8) || nombre.includes(9) || nombre == ""){
    alert('Ingrese correctamente el nombre')
    return false
} else if (edad < 1 || edad > 120 ){
    alert('Por favor ingrese correctamente la edad')
    return false
} else if (dni < 10000000 || dni > 99999999){
    alert('Por favor ingrese correctamente el dni')
    return false
} else if ((!sexo.includes("h") && !sexo.includes("m")) || sexo == ""){
    alert('Por favor ingrese correctamente su sexo')
    return false
} else if (peso < 2 || peso > 400){
    alert('Ingrese su peso correctamente')
    return false
} else if (altura < 1 || altura > 250){
    alert('Ingrese su altura correctamente')
    return false
} else if (nacimiento < 1902 || nacimiento > 2023){
    alert('Ingrese el año de nacimiento correctamente')
    return false
} else {
    if(sexo == "h"){
        sexo = "Hombre"
    } else{
        sexo = "Mujer"
    }
    var sujeto = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento)
    sujetos.push(sujeto)
    document.querySelector('#nombre').toggleAttribute("disabled")
    document.querySelector('#edad').toggleAttribute("disabled")
    document.querySelector('#dni').toggleAttribute("disabled")
    document.querySelector('#sexo').toggleAttribute("disabled")
    document.querySelector('#peso').toggleAttribute("disabled")
    document.querySelector('#altura').toggleAttribute("disabled")
    document.querySelector('#nacimiento').toggleAttribute("disabled")
}

}

const reiniciar = document.querySelector('#reset');

reiniciar.addEventListener('click', () => {
    location.reload();
})
//  document.querySelectorAll('[type="number"]').forEach(input => {
//      input.oninput = () => {
//          if (input.value > 60) input.value = 60;
//          if (input.value < 0 ) input.value = 0
//     }
// })

const nombreE = document.querySelector('#nombre')
const edadE = document.querySelector('#edad')
const dniE = document.querySelector('#dni')
const sexoE = document.querySelector('#sexo')
const pesoE = document.querySelector('#peso')
const alturaE = document.querySelector('#altura')
const nacimientoE = document.querySelector('#nacimiento')

const arraE = [nombreE, edadE, dniE, sexoE, pesoE, alturaE, nacimientoE];


for(var i = 0; i < arraE.length; i++){
    arraE[i].addEventListener("keyup", (e) => {
        if (e.keyCode === 13){
            crearObjeto()
        }
    })
}

//for(var i = 0; i < arraE.length; i++){
    
//}

let formularioDivs = document.getElementById('formulariodepersona')

for(var i = 0; i< formularioDivs.getElementsByTagName("div").length; i++){
    formularioDivs.getElementsByTagName("div")[i].setAttribute("class", "align-self-center text-center py-1 d-flex flex-column")
}

for(var i = 0; i < formularioDivs.getElementsByTagName("input").length; i++){
    formularioDivs.getElementsByTagName("input")[i].setAttribute("class", "text-center")
}

const contenedorDeMetodos = document.querySelector('#contenedorDeMetodos')

const generacionAMostrar = document.querySelector('#generacionAMostrar');

const labelgeneracion = document.querySelector('#labelgeneracion');

const labeledad = document.querySelector('#labeledad');

const labeldatos = document.querySelector('#labeldatos')
generacionAMostrar.addEventListener('click', () => {
    if(sujetos.length == 0){
        alert('No ha Ingresado sus datos')
    } else {
    sujetos[0].mostrarGeneracion()
    }
})

generacionAMostrar.addEventListener("mouseover", e => {
    labelgeneracion.style.scale= "1.2"
    
    labelgeneracion.style.transition = "all 0.5s"
})
generacionAMostrar.addEventListener("mouseleave", e => {
    labelgeneracion.style.scale= "1"
})

const mayorOMenorEdad = document.querySelector('#mayorOmenorEdad');

mayorOMenorEdad.addEventListener('click', () => {
    if(sujetos.length == 0){
        alert('No ha Ingresado sus datos')
    } else {
    sujetos[0].esMayorDeEdad()
    }
})

mayorOMenorEdad.addEventListener("mouseover", e => {
    labeledad.style.transition = "all 0.5s"
    labeledad.style.scale= "1.2"
})
mayorOMenorEdad.addEventListener("mouseleave", e => {
    labeledad.style.scale= "1"
})

const verDatos = document.querySelector('#mostrarLosDatos')

verDatos.addEventListener('click', () => {
    if(sujetos.length == 0){
        alert('No ha Ingresado sus datos')
    } else {
    sujetos[0].mostrarDatos()
    }
})

verDatos.addEventListener("mouseover", e => {
    labeldatos.style.scale= "1.2"
    labeldatos.style.transition = "all 0.5s"
})
verDatos.addEventListener("mouseleave", e => {
    labeldatos.style.scale = "1"
})

const botonRegistro = document.querySelector('#crear');

botonRegistro.addEventListener('click', () =>{
    crearObjeto()
})


