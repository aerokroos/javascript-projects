/**
 * 1. Realizar a través de un formulario un programa
    que convierta de  °C a °F, el campo de texto solo
    debe permitir introducir valores numéricos. El 
    resultado se deberá mostrar a través de un alert 
    y permitir al usuario realizar nuevas operaciones.
 */

/**
 * Definicion de elementos del DOM
 */
let inputCelsius = document.querySelector(".celsius");

/**
 * Funcion de convertir
 */
function convertir() {
  let fahrenheit;
  if (isNaN(inputCelsius.value)) {
    alert("No has ingresado un valor numerico");
    // location.reload();
    inputCelsius.value = "";
  } else {
    fahrenheit = (parseFloat(inputCelsius.value) * 9) / 5 + 32;
    alert("Fahrenheit: " + fahrenheit);
    // location.reload();
    inputCelsius.value = "";
  }
}
