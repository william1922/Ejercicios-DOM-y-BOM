let maximoHoras = document.getElementById('horas');
let maximoMinutos = document.getElementById('minutos');
let maximoSegundos = document.getElementById('segundos')

maximoHoras.oninput = () => {
    if (maximoHoras.value > 99) maximoHoras.value = 99;
    if (maximoHoras.value < 0 ) maximoHoras.value = 0;
 }

maximoMinutos.oninput = () => {
    if (maximoMinutos.value > 60) maximoMinutos.value = 60;
    if (maximoMinutos.value < 0 ) maximoMinutos.value = 0;
}

maximoSegundos.oninput = () => {
    if (maximoSegundos.value > 60) maximoSegundos.value = 60;
    if (maximoSegundos.value < 0 ) maximoSegundos.value = 0;
}

const temporizar = () => {

    if(maximoHoras.value > 0){
        maximoSegundos.value --;

        if(maximoSegundos.value < 0){
            maximoMinutos.value --;
            maximoSegundos.value = 59
        }
        if(maximoMinutos.value < 0){
            maximoMinutos.value = 59;
            maximoHoras.value --;
        }
    } else if(maximoMinutos.value > 0){
        maximoSegundos.value --;
        
        if(maximoSegundos.value < 0){
        maximoSegundos.value = 59;
        maximoMinutos.value --;
        }
    } else if(maximoHoras.value == 0 && maximoMinutos.value == 0){
        maximoSegundos.value --;

        if(maximoSegundos.value == 0){
            clearInterval(iniciador)
        }
        
    }
}

document.getElementById('iniciar').addEventListener("click", () => {
    if(maximoHoras.value == 0 && maximoMinutos.value == 0 && maximoSegundos.value == 0){
        alert('No ha ingresado numeros')
    } else{
    iniciador = setInterval(temporizar, 1000)
    }
})

document.querySelector('#pausar').addEventListener("click", () =>{
    clearInterval(iniciador);
})

document.querySelector('#reset').addEventListener("click", () => {
    clearInterval(iniciador)
    maximoHoras.value = 0;
    maximoMinutos.value = 0;
    maximoSegundos.value = 0;
})

