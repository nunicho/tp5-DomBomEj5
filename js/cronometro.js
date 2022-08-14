/*
let horas = 0
let minutos = 0
let segundos = 0
let centesimas = 0

let tituloCronometro = document.querySelector('#cronometro')

parrafoFecha.innerHTML = `${horas} : ${minutos} : ${segundos} : ${centesimas}`

function cronometrear (){
    
}
*/

(() => {

let horas = `00`,
    minutos = `00`,
    segundos = `00`,
    cronometroDisplay = document.querySelector(`#cronometro`), cronometroFuncionar
  
function cronometrear() {
  
      segundos ++
  
      if (segundos < 10) segundos = `0` + segundos
  
      if (segundos > 59) {
        segundos = `00`
        minutos ++
  
        if (minutos < 10) minutos = `0` + minutos
      }
  
      if (minutos > 59) {
        minutos = `00`
        horas ++
        
        if (horas < 10) horas = `0` + horas
      }
  
      cronometroDisplay.textContent = `${horas}:${minutos}:${segundos}`
  
    }
  
    play.onclick = (event) => {
      cronometroFuncionar = setInterval(cronometrear, 1000)
      event.target.setAttribute(`disabled`,``)
    }
  
    pause.onclick = () => {
      clearInterval(cronometroFuncionar)
      play.removeAttribute(`disabled`)
    }
  
    reset.onclick = () => {
      clearInterval(cronometroFuncionar) 
      play.removeAttribute(`disabled`)
      cronometroDisplay.textContent = `00:00:00`
      
        horas = `00`,
        minutos = `00`,
        segundos = `00`
    }
    
  })()