let adivinarnumero = Math.random()*(11-1)+1
document.frioocaliente.adivinar.value = Math.floor(adivinarnumero)
let primero = document.frioocaliente.adivinar.value
let cambiargradiente1 = ["to right, "]
let porcentaje = 100
let intentos=0;


function adivinar1(){
    let segundo = document.frioocaliente.adivinador.value;
    
    if (intentos >= 5){
        alert("Alcanzo el maximo de intentos")
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)600%)`
        ocultarpregunta.toggleAttribute("hidden")
        botonprobador.toggleAttribute("disabled")
    }else if (segundo == primero){
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)0%)`
        alert('Felicidades Adivinaste el numero')  
        intentos++
        document.getElementById("losintentos").value = `Numero de Intentos: ${intentos} en acertar el numero.`
        ocultarpregunta.toggleAttribute("hidden")
        botonprobador.toggleAttribute("disabled")
    } else if (segundo > 10 || segundo <= 0 || isNaN(segundo)){
        alert('Por favor Ingrese un valor numerico entre el 1 y el 10')
    } else if ((primero - segundo >= 1  && primero - segundo <= 2) || (segundo - primero >= 1 && segundo - primero <=2)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje - 15}%)`
        porcentaje -=15
        intentos++
        alert('Muy caliente')       
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
    } else if ((primero - segundo >= 3  && primero - segundo <= 5)|| (segundo - primero >= 3 && segundo - primero <=5)) {
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje - 15}%)`
        porcentaje -= 15
        intentos++
        alert('Caliente')
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
    } else if ((primero - segundo >= 6  && primero - segundo <= 7)|| (segundo - primero >= 6 && segundo - primero <=7)){
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje + 35}%)`
        porcentaje += 35
        intentos++
        alert('Frio')
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
    } else if ((primero - segundo >= 8  && primero - segundo <= 10)|| (segundo - primero >= 8 && segundo - primero <=10)){
        document.getElementById("fondo5").style.background = `linear-gradient(${cambiargradiente1}rgb(48, 147, 240) , rgb(228, 45, 45)${porcentaje + 35}%)`
        porcentaje += 35
        intentos++
        alert('Muy frio')
        document.getElementById("losintentos").value = `Intentos: ${intentos}`
    }
}