const ejercicio1 = document.querySelector('#ejercicio1');
const ejercicio2 = document.querySelector('#ejercicio2');
const ejercicio3 = document.querySelector('#ejercicio3');
const ejercicio4 = document.querySelector('#ejercicio4');
const ejercicio5 = document.querySelector('#ejercicio5');
const ejercicio6 = document.querySelector('#ejercicio6');
const cuerpomedio = document.querySelector('.cuerpomedio')
const textoocultar = document.querySelector('#textoaocultar')
const imagen = document.querySelector('#imagen');

ejercicio1.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E1.png");
})

ejercicio1.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})

ejercicio2.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E2.2.png")
})

ejercicio2.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})

ejercicio3.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E3.2.png")
})

ejercicio3.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})

ejercicio4.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E4.2.png")
})

ejercicio4.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})

ejercicio5.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E5.2.png")
})

ejercicio5.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})

ejercicio6.addEventListener("mouseover", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex flex-column-reverse container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "/img/E6.2.png")
})

ejercicio6.addEventListener("mouseleave", e => {
    cuerpomedio.setAttribute("class", "justify-content-center d-flex container-fluid col-8 cuerpomedio")
    imagen.setAttribute("src", "")
})