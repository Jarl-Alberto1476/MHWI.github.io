const input = document.querySelector('input'); //seleccionas el input
const button = document.querySelector('button'); //seleccionas el boton
const nombreMonster = document.querySelector('#nombreMonstruo'); //selecciona el elemento a modificar
const especieMonster = document.querySelector('#especie');
const descMonster = document.querySelector('#desc');
const monsterContainer = document.querySelector('.monstruo__container'); //seleccionas el contenedor donde aparecera la info 
const verMasBtn = document.getElementById('verMasBtn');

input.addEventListener('input', (e) => { //evento para que el contenido del input siempre este en minuscula
    const inputValue = e.target.value.toLowerCase();
    e.target.value = inputValue;
});

sessionStorage.clear();

button.addEventListener('click', (e) => { //Creas el evento para que reciba el valor que quieras y lo busque en la API
    e.preventDefault();
    const monstruo = input.value;
    traerMonstruo(monstruo);
    guardarNombreMonstruo(monstruo);
})

function guardarNombreMonstruo(nombre) { //se guarda en la sesion el valor del input
    sessionStorage.setItem('nombreMonstruo', nombre);
}

function traerMonstruo(monstruo) {
    fetch(`https://mhw-db.com/monsters?q={"name":"${monstruo}"}`)
        .then(res => res.json())
        .then(data => {
            const alerta = document.querySelector('.alerta');
            if (data.length > 0) {
                // El monstruo existe, mostrar los detalles y eliminar la alerta
                alerta.textContent = ''; // Eliminar el contenido de la alerta
                data.forEach(monstruo => {
                    nombreMonster.innerHTML = `Nombre: ${monstruo?.name}`;
                    especieMonster.innerHTML = `Especie: ${monstruo?.species}`;
                    descMonster.innerHTML = `Descripción: ${monstruo?.description}`;
                    monsterContainer.appendChild(nombreMonster);
                    monsterContainer.appendChild(especieMonster);
                    monsterContainer.appendChild(descMonster);
                });
            } else {
                // El monstruo no existe, mostrar la alerta
                alerta.textContent = 'Monstruo no encontrado';
            }
        })
        .catch(err => console.log(err));
}


const verDetallesBtn = document.getElementById('verMasBtn'); 
verDetallesBtn.addEventListener('click', (e) => { //Funcion para enviar la informacion a la otra pagina
    e.preventDefault();
    const nombreMonstruo = sessionStorage.getItem('nombreMonstruo');
    // Redirigir a la página de detalles del monstruo pasando el nombre como parámetro en la URL
    window.location.href = `monsterInfo.html?nombre=${nombreMonstruo}`;
});





