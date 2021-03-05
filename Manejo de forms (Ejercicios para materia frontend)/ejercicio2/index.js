/**
 * 2.    Realizar el ejercicio anterior, pero con el uso de la función
   convierteAFarenheit(gc).
 */

/**
 * Definicion de elementos del DOM
 */
let inputCelsius = document.querySelector(".celsius");
let btnConvertir = document.querySelector("#btnConvertir");

/**
 * Listener
 */
btnConvertir.addEventListener("click", convierteAFarenheit);

/**
 * Funcion de convierteAFarenheit()
 */
function convierteAFarenheit(gc) {
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
