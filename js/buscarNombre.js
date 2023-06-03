const input = document.querySelector('input'); //seleccionas el input
const button = document.querySelector('button'); //seleccionas el boton
const alerta = document.querySelector('#alerta');



button.addEventListener('click', (e) => { //Creas el evento para que reciba el valor que quieras y lo busque en la API
    e.preventDefault();
    const monstruo = input.value;

     fetch(`https://mhw-db.com/monsters?q={"name":"${monstruo}"}`)
        .then(response => response.json())
        .then(data => {
            // Verificar si se encontró algún monstruo
            if (data.length > 0) {
                const nombreMonstruo = data[0].name;
                const nombreMonstruoValue = nombreMonstruo.toLowerCase();
                // Redirigir a la página de detalles del monstruo pasando el nombre como parámetro en la URL
                window.location.href = `monsterInfo.html?nombre=${nombreMonstruoValue}`;
            } else {
                alerta.textContent = 'Monstruo no encontrado';
            }
        })
        .catch(error => {
            alerta.textContent = 'Error al realizar la búsqueda';
            console.error(error);
        }); 
}); 
