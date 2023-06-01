//validar Correo Electronico
const enviar = document.getElementById('enviar');
const alerta = document.getElementById('alerta');

enviar.addEventListener('click', (e) => { 
    e.preventDefault();
    const email = document.getElementById('email').value;
    validarCorreo();
})

const validarCorreo = (correo) => { 
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let verificar = mailFormat.test(correo);
    if(verificar) { 
        alerta.innerHTML = 'El correo es valido'
    } else {
        alerta.innerHTML = 'El correo NO es valido'
    }
}
