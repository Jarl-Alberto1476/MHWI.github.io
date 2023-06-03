const datos = [ //Arreglo de informacion de los monstruos para mostrar en el HTML
    {
        nombre: "Kulu-Ya-Ku",
        especie: "bird wyvern",
        descripcion: "An odd bird wyvern that has developed limbs capable of carrying weapons."
    },
    {
        nombre: "Anjanath",
        especie: "brute wyvern",
        descripcion: "The Anjanath patrols the Ancient Forest, looking for its favorite meal, Aptonoth."
    },
    {
        nombre: "Legiana",
        especie: "flying wyvern",
        descripcion: "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos."
    },
    {
        nombre: "Nergigante",
        especie: "elder dragon",
        descripcion: "A terrible elder dragon that appears when other elders are in the vicinity. "
    }
];

const divs = document.querySelectorAll('.informacion');

for (let i = 0; i < divs.length; i++) { //se recorren para identificar en que lugar va a ir cada informacion
    const nombreIndex = divs[i].querySelector('.nombreIndex');
    const especieIndex = divs[i].querySelector('.especieIndex');
    const descripcionIndex = divs[i].querySelector('.descripcionIndex');

    nombreIndex.textContent = datos[i].nombre;
    especieIndex.textContent = datos[i].especie;
    descripcionIndex.textContent = datos[i].descripcion;
}



