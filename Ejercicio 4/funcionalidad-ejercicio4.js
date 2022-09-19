
const diameshoy = document.querySelector('#diames');
const hora = document.querySelector('#reloj')

const notar = () => {
    let arrayDia = [];

    let arrayDiatest = [];
    let diaIng = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let diaEsp = ["Lunes ", "Martes ", "Miercoles ", "Jueves ", "Viernes ", "Sabado ", "Domingo "]

    for(var i = 0; i < 3; i++){
        arrayDiatest += Date()[i]
    }

    for(var i = 0; i < diaIng.length; i++){
        if(arrayDiatest == diaIng[i]){
            arrayDia += diaEsp[i]
        }
    }
   arrayDia += Date()[8]
   arrayDia += `${Date()[9]} de `
    
    let arrayMes = [];
    let mesIng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let mesEsp = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    for(var i = 4; i < 7; i++){
        arrayMes += Date()[i]
    }
    for(var i = 0; i < mesIng.length; i++){
        if (arrayMes == mesIng[i]){
            arrayDia += `${mesEsp[i]} del `
        }
    }
    
    for(var i = 11; i < 15; i++){
        arrayDia += Date()[i]
    }

    diameshoy.value = arrayDia
    
    let horadia = [];
    for (var i = 16; i < 24; i++){
        horadia += Date()[i]
    }

    hora.value = horadia
}
notar()
setInterval(notar, 1000)
