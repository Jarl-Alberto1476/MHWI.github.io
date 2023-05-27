// Codigo para hacer Slider automatico y con controles manuales
let imagenes = [
    "build/img/great jagras.webp",
    "build/img/jyurathodus.webp",
    "build/img/rathalos2.webp",
    "build/img/radoban.webp"]; // Mando llamar las imagenes que quiero mostrar en el Slider

document.Imagen.src = imagenes[0]; //muestro la imagen en la posicion 0 del array


let sliderDerecha = document.querySelector(".slider__derecho"); //declaro la variable de los controles
let sliderIzquierda = document.querySelector(".slider__izquierdo");
let contador = 0; //inicializo el contador

//funciones de controles manuales
function moverDerecha() {
    contador++;
    if (contador > imagenes.length - 1) {
        contador = 0;
    }
    document.Imagen.src = imagenes[contador];
}
//funcion anomina para control automatico derechp
let intervalo = setInterval(moverDerecha, 6000); //declaramos una variable para guardar el intervalo
sliderDerecha.addEventListener("click", function () {
    clearInterval(intervalo); //limpiamos el intervalo
    moverDerecha(); //llamamos a las funciones ya reinicadas
    intervalo = setInterval(moverDerecha, 6000);
});

//funciones de controles manuales
function moverIzquierda() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1
    }
    document.Imagen.src = imagenes[contador];
}
//funcion anomina para control automatico izquierdo
sliderIzquierda.addEventListener("click", function () {
    clearInterval();
    moverIzquierda();
    intervalo = setInterval(moverIzquierda, 6000)
});


//validaciones de formularios

const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", e => { 
    
});