
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const centecimas = document.querySelector('#centecimas');

const cronometrar = () => {
    centecimas.value ++
    
    if (centecimas.value > 99){
        segundos.value ++
        centecimas.value = 0
    }
    if (segundos.value > 59){
        segundos.value = 0;
        minutos.value ++
    }
    if (minutos.value > 59){
        minutos.value = 0
        horas.value ++
    }
}

document.querySelector('#iniciar').addEventListener("click", () => {
    iniciador = setInterval(cronometrar, 10);
})

document.querySelector('#pausar').addEventListener("click", () =>{
    clearInterval(iniciador);
})

document.querySelector('#reset').addEventListener("click", () => {
    clearInterval(iniciador)
    segundos.value = 0;
    minutos.value = 0;
    horas.value = 0;
    centecimas.value = 0
})


