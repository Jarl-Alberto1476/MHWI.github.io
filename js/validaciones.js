//validaciones de formularios
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", e => { 
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let alerta = "";
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    alerta.innerHTML = ""
    if(nombre.value.length < 4) { 
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!mailFormat.test(email.value)) { 
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(message.test(message.value)) {
        warnings += `El campo del mensaje esta vacio <br>`
        entrar = true
    }
    if(entrar) { 
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";  
    }
});