(() => {

    let horas = `00`,
        minutos = `00`,
        segundos = `00`,
        milesimas = `00`,
        cronometroDisplay = document.querySelector(`#cronometro`), cronometroFuncionar
      
    function cronometrear() {
      
          milesimas ++
          if (milesimas < 10) milesimas = `0` + milesimas
               
          if (milesimas > 99) {
            milesimas = `0`
            segundos ++
            if (segundos < 10) segundos = `0` + segundos
      
            }      
      
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
      
          cronometroDisplay.textContent = `${horas}:${minutos}:${segundos}:${milesimas}`
      
        }
      
        play.onclick = (event) => {
          cronometroFuncionar = setInterval(cronometrear, 10)
          event.target.setAttribute(`disabled`,``)
        }
      
        pause.onclick = () => {
          clearInterval(cronometroFuncionar)
          play.removeAttribute(`disabled`)
        }
      
        reset.onclick = () => {
          clearInterval(cronometroFuncionar) 
          play.removeAttribute(`disabled`)
          cronometroDisplay.textContent = `00:00:00:00`
          
            horas = `00`,
            minutos = `00`,
            segundos = `00`,
            milesimas = `00`
        }
        
      })()

