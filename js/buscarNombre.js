const form = document.querySelector('#formbusq');
const input = document.querySelector('#busqueda');
const alerta = document.querySelector('#alerta');

input.addEventListener('input', (e) => {
    var inputValue = e.target.value;
    e.target.value = inputValue.toLowerCase();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const monstruo = input.value;

    fetch(`https://mhw-db.com/monsters?q={"name":"${monstruo}"}`)
        .then(response => response.json())
        .then(data => {
            // Verificar si se encontró algún monstruo
            if (data.length > 0) {
                const nombreMonstruo = data[0].name;
                // Redirigir a la página de detalles del monstruo pasando el nombre como parámetro en la URL
                window.location.href = `monsterInfo.html?nombre=${nombreMonstruo}`;
            } else {
                alerta.textContent = 'Monstruo no encontrado';
            }
        })
        .catch(error => {
            alerta.textContent = 'Error al realizar la búsqueda';
            console.error(error);
        });
});
