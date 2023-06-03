const imagenContainer = document.getElementById("imagenContainer");
const nombreMonstruoElement = document.getElementById("nombreMonstruo");
const especieMonstruoElement = document.getElementById("especieMonstruo");
const descripcionMonstruoElement = document.getElementById("descripcionMonstruo");
const debilidadesMonstruoElement = document.getElementById("debilidadesMonstruo"); 

// Obtiene el nombre del monstruo de la URL
const urlParams = new URLSearchParams(window.location.search);
const nombreMonstruo = urlParams.get("nombre");

// Construye la URL de la imagen basada en el nombre del monstruo
const imagenUrl = `build/img/${nombreMonstruo}.jpg`;

// Crea el elemento de imagen y establece la URL
const imagen = document.createElement("img");
imagen.src = imagenUrl;

// Agrega la imagen al contenedor
imagenContainer.appendChild(imagen);

// Realiza una llamada a la API para obtener los detalles del monstruo
fetch(`https://mhw-db.com/monsters?q={"name":"${nombreMonstruo}"}`)
  .then((response) => response.json())
  .then((data) => {
    const monstruo = data[0]; // Suponiendo que la API devuelve un array con un único monstruo

    // Actualiza los elementos HTML con la información del monstruo
    nombreMonstruoElement.textContent = `Nombre: ${monstruo?.name}`;
    especieMonstruoElement.textContent = `Especie: ${monstruo?.species}`;
    descripcionMonstruoElement.textContent = `Descripción: ${monstruo?.description}`;

    // Ordena las debilidades de mayor a menor
    const debilidadesOrdenadas = monstruo?.weaknesses.sort(
      (a, b) => b.stars - a.stars
    );

    // Crea elementos de lista para cada debilidad y los agrega al elemento de lista ul
    debilidadesOrdenadas.forEach((debilidad) => {
      const li = document.createElement("li");
      li.textContent = `${debilidad.element} (${debilidad.stars} estrellas)`;
      debilidadesMonstruoElement.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Error al obtener los detalles del monstruo:", error);
  });
