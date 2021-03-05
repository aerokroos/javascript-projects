/**
 * 3.Realizar un formulario con los siguientes campos:

        1.- Nombre: campo de texto (validar solo letras y requerido)
        
        2.- Apellido Paterno: campo de texto (validar solo letras y requerido)
        
        3.- Fecha de nacimiento (validar fecha año-mes-dia)
        
        4.- Ciudad de nacimiento: Lista de selección: Hermosillo, Nogales, 
            Obregón, Navojoa, obligatorio
        
        5.- Estado: campo de texto, obligatorio
        
        6.- País: campo de texto
        
        7.- Correo electrónico: campo de texto, requerido y validar e-mail
        
        8.- Comentarios: textarea, con un máximo de 125 caracteres y obligatorio.
    
    Toda la información del formulario debe ser mostrada en la misma página y 
    debe mostrar al usuario alertas en caso de existir errores y una ventana
    de confirmación  cuando envíe el formulario, se debe validar también que 
    el formulario no se envié varias veces.
 */

/**
 * Definir elementos del DOM
 */
const nombreInp = document.querySelector(".nombre");
const apelidoPaternoInp = document.querySelector(".apellidoPaterno");
const fechNacInp = document.querySelector(".fechNac");
const ciudadInp = document.querySelector(".ciudad");
const estadoInp = document.querySelector(".estado");
const paisInp = document.querySelector(".pais");
const correoInp = document.querySelector(".correo");
const comentariosInp = document.getElementById("comentarios");

/**
 * Formatos
 */
const formatoLetras = /^[A-Za-z]+$/;
const formatoFecha = /[0-9]{2}-[0-9]{2}-[0-9]{4}/;
const formatoCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * Mensajes de errores
 */
let errores = [];

/**
 * Auto cargador de la pagina
 */
document.addEventListener("DOMContentLoaded", function (event) {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  console.log(JSON.parse(localStorage.getItem("user")));
  mostrarInfoUsuario(userInfo);
});

/**
 * Esta funcion muestra la informacion del usuario
 * en la pagina.
 */
function mostrarInfoUsuario(userInfo) {
  if (userInfo) {
    document.getElementById("usuario").innerHTML += `
      <h1>Usuario</h1>
      <p><b>Nombre:</b> ${userInfo.nombre}</p>
      <p><b>Apellido Paterno:</b> ${userInfo.apellidoPaterno}</p>
      <p><b>Fecha de Nacimiento:</b> ${userInfo.fechaNac}</p>
      <p><b>Ciudad:</b> ${userInfo.ciudad}</p>
      <p><b>Estado:</b> ${userInfo.estado}</p>
      <p><b>Pais:</b> ${userInfo.pais}</p>
      <p><b>Correo:</b> ${userInfo.correo}</p>
      <p><b>Comntarios:</b> ${userInfo.comentarios}</p>
    `;
  }
}

/**
 * Esta funcion comprueba las limitaciones y tambien guarda la informacion
 * en el almacenamiento local del navagador
 */
function guardarInformacion() {
  let respuesta = confirm("Seguro que quieres mandar la informacion?");

  if (respuesta == false) {
    return false;
  } else {
    // Check errors
    if (!nombreInp.value.match(formatoLetras)) {
      errores.push("El campo nombre no contiene letras y es obligatorio");
    }

    if (!apelidoPaternoInp.value.match(formatoLetras)) {
      errores.push(
        "El campo apellido paterno no contiene letras y es obligatorio"
      );
    }

    if (!fechNacInp.value.match(formatoFecha)) {
      errores.push(
        "El campo fecha de namcimiento no cumple el formato mm-dd-yyyy"
      );
    }

    if (!correoInp.value.match(formatoCorreo)) {
      errores.push("El correo no valido");
    }

    if (comentariosInp.value.length >= 125) {
      errores.push("Tus comentarios sobre pasan los 125 caracteres");
    }

    if (errores.length >= 1) {
      alert("Errores: " + errores);
      errores = [];
      return false;
    } else {
      const user = {
        nombre: nombreInp.value,
        apellidoPaterno: apelidoPaternoInp.value,
        fechaNac: fechNacInp.value,
        ciudad: ciudadInp.value,
        estado: estadoInp.value,
        pais: paisInp.value,
        correo: correoInp.value,
        comentarios: comentariosInp.value,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
  }
}
