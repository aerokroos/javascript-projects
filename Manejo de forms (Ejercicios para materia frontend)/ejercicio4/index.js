/**
 * 4.    Realizar un formulario con los siguientes campos

        1.Nombre completo: campo de texto, requerido.
        
        2.Selecciona tu lengua materna: radio button
            1.Español
            2.Inglés
            3.Alemán
            4.Francés
        
        3.Selecciona tus pasatiempos favoritos: checkbox
            1.Lectura
            2.Deporte
            3.Video juegos
            4.Dormir
            5.Viajar
    
        4. Fruta favorita: lista desplegable
            1.Naranja
            2.Pera
            3.Fresa
            4.Manzana
            5.Plátano
        
        5.Selecciona tu sexo: radio button
            1.Hombre
            2.Mujer
        
        6.Elije tu fecha de nacimiento:  dd/mm/aaaa

        Los resultados del formulario se deberán mostrar en una segunda página 
        html, se deberán mostrar alertas, confirmaciones y mensajes de 
        ERROR/VALIDACIÓN.
 */

/**
 * Definiendo elementos del DOM
 */
const nombreInp = document.querySelector("#nombreCompleto");
const lenguaInp = document.querySelectorAll(".lengua");
const pasatiemposInp = document.querySelectorAll(".pasatiempo");
const frutaInp = document.querySelector(".fruta");
const sexoInp = document.querySelectorAll(".sexo");
const fechaNacInp = document.querySelector("#fecha");

/**
 * lista donde guardaremos los pasatiempos elegidos por el usuario
 */
let listaPasatiempos = [];
let idiomaUsuario;
let sexoUsuario;

function filtrarPasatiempos() {
  for (let pasatiempo of pasatiemposInp.values()) {
    if (pasatiempo.checked) {
      listaPasatiempos.push(pasatiempo.value);
    }
  }
  return listaPasatiempos;
}

function obtenerRadioBtnValue(elementos) {
  for (let elemento of elementos.values()) {
    if (elemento.checked) {
      return elemento.value;
    }
  }
}

function guardarInformacion(e) {
  let respuesta = confirm("Seguro que quieres continuar?");
  listaPasatiempos = filtrarPasatiempos();
  idiomaUsuario = obtenerRadioBtnValue(lenguaInp);
  sexoUsuario = obtenerRadioBtnValue(sexoInp);

  if (respuesta == false) {
    return false;
  } else {
    const usuario = {
      nombre: nombreInp.value,
      lengua: idiomaUsuario,
      pasatiempos: listaPasatiempos,
      fruta: frutaInp.value,
      sexo: sexoUsuario,
      fechaNac: fechaNacInp.value,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    const usuarioInfo = JSON.parse(localStorage.getItem("usuario"));
    mostrarInformacion(usuarioInfo);
  }
}

function mostrarInformacion(usuarioInfo) {
  document.write(`<h1>Usuario</h1>
  <p><b>Nombre:</b> ${usuarioInfo.nombre}</p>
  <p><b>Idioma:</b> ${usuarioInfo.lengua}</p>
  <p><b>Pastiempos:</b> ${usuarioInfo.pasatiempos}</p>
  <p><b>Fruta Favorita:</b> ${usuarioInfo.fruta}</p>
  <p><b>Sexo:</b> ${usuarioInfo.sexo}</p>
  <p><b>Fecha de nacimiento:</b> ${usuarioInfo.fechaNac}</p>`);
}
