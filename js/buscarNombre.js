const input = document.querySelector('input'); //seleccionas el input
const button = document.querySelector('button'); //seleccionas el boton
const nombreMonster = document.querySelector('#nombreMonstruo'); //selecciona el elemento a modificar
const especieMonster = document.querySelector('#especie');
const descMonster = document.querySelector('#desc');
const monsterContainer = document.querySelector('.monstruo__container'); //seleccionas el container donde aparecera la info 
const verMasBtn = document.getElementById('verMasBtn');

button.addEventListener('click', (e) => { //Creas el evento para que reciba el valor que quieras y lo busque en la API
    e.preventDefault();
    const monstruo = input.value;
    traerMonstruo(monstruo);
    guardarNombreMonstruo(monstruo);
})

function guardarNombreMonstruo(nombre) {
    sessionStorage.setItem('nombreMonstruo', nombre);
}

function traerMonstruo(monstruo) {
    fetch(`https://mhw-db.com/monsters?q={"name":"${monstruo}"}`) //accedes a la API con el nombre que ingresas en el input
        .then(res => res.json()) //Conviertes la info de la API en un JSON
        .then(data => {
            data.forEach(monstruo => { //iteracion por cada posicion del array
                //cambio de valor de elementos que se insertaran en el HTML
                nombreMonster.innerHTML = `Nombre: ${monstruo?.name}`;
                especieMonster.innerHTML = `Especie: ${monstruo?.species}`;
                descMonster.innerHTML = `Descripción: ${monstruo?.description}`;
                monsterContainer.appendChild(nombreMonster); //añadir al contenedor
                monsterContainer.appendChild(especieMonster);
                monsterContainer.appendChild(descMonster);
            })
        })
        .catch(err => console.log(err));
}

const verDetallesBtn = document.getElementById('verMasBtn');
verDetallesBtn.addEventListener('click', function(event) {
    event.preventDefault();
  
    const nombreMonstruo = sessionStorage.getItem('nombreMonstruo');
  
    // Redirigir a la página de detalles del monstruo pasando el nombre como parámetro en la URL
    window.location.href = `monsterInfo.html?nombre=${nombreMonstruo}`;
});



