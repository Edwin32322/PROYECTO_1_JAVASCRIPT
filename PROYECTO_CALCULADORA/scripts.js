const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")
botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const botonOn = boton.textContent

        if (boton.id === 'limpiar'){
            pantalla.textContent = "|"
            return
        }
        if (boton.id === 'borrar'){
            if (pantalla.textContent.length ===1) {
                pantalla.textContent = "|"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }
        if(boton.id == "igual"){
            try{
                const resultado = eval(pantalla.textContent)
                if(resultado == undefined){
                    pantalla.textContent = "¡Error!"
                }else{
                    pantalla.textContent = resultado
                }
            }catch{
                pantalla.textContent = "¡Error!"
            }
            return
        }
        if (pantalla.textContent === "|"|| pantalla.textContent === "¡Error!") {
                pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }
    })
})