/**
 * 5.  Crea dos formularios. 
    El primero pedirá al usuario su 
    nombre, apellido, teléfono, correo electrónico y Curp. El 
    segundo pedirá su dirección: dirección, código postal, 
    localidad y estado. 
    Comprueba mediante expresiones regulares y lanzando un 
    alert que:

        * Nombre y apellido no tengan números y no estén vacíos.
        * Que el CURP sea de la forma nueve dígitos + letra.
        * Que el teléfono tenga nueve dígitos exclusivamente.
        * Que el correo electrónico sea de la forma 
          texto@texto.texto
        * Coloca el foco en el segundo elemento del primer 
          formulario por defecto (apellido).
        * La validación se debe hacer mediante clases asociadas 
          a los elementos del formulario. Por ejemplo: 
          <input type="text" id="nombre" name="nombre" class="requerido texto" />
 */

/**
 * Definiendo elementos del DOM
 */
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const curp = document.getElementById("curp");
const direccion = document.getElementById("direccion");
const codigoPostal = document.getElementById("codigoPostal");
const localidad = document.getElementById("localidad");
const estado = document.getElementById("estado");

const requerido = document.querySelectorAll(".requerido");

/**
 * formatos
 */
const formatoLetras = /^[A-Za-z]+$/;
const formatoFecha = /[0-9]{2}-[0-9]{2}-[0-9]{4}/;
const formatoCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * Lista de Errores
 */
let errores = [];

/**
 * Listener para si el elemento es requerido
 */
function verificar() {
  let respuesta = confirm("Seguro que quieres mandar la informacion?");

  if (respuesta == false) {
    return false;
  } else {
    // Errores  Handlig
    for (let campo of requerido.values()) {
      if (campo.value === "") {
        errores.push("\nVacio: " + campo.getAttribute("id"));
      }
    }

    if (!nombre.value.match(formatoLetras)) {
      errores.push("\nEl campo nombre no contine solo letras");
    }

    if (!apellido.value.match(formatoLetras)) {
      errores.push("\nEl campo apellido no contine solo letras");
    }

    if (telefono.value.length > 9) {
      errores.push("\nEl telefono tiene digitos de mas");
    }

    if (!correo.value.match(formatoCorreo)) {
      errores.push("\nEl campo correo no sigue el formato");
    }

    if (!curp.value.match(formatoLetras) || curp.value.length != 9) {
      errores.push(
        "\nEl campo curp no es valido tines que ser de nueve digitos y solo letras"
      );
    }

    if (errores.length >= 1) {
      alert("Errores: " + errores + "\n");
      errores = [];
      return false;
    } else {
      alert("Todo esta bien");
      return true;
    }
  }
}
