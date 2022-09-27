import { nuevoCliente } from "./API.js";
import { mostrarAlerta, validacion } from "./funciones.js";

(function () {

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario (e) {
    e.preventDefault();

    const inputNombre   = document.querySelector('#nombre').value;
    const inputEmail    = document.querySelector('#email').value;
    const inputTelefono = document.querySelector('#telefono').value;
    const inputEmpresa  = document.querySelector('#empresa').value;

    // Objeto con todos los valores de los input
    const cliente = {
        nombre: inputNombre,
        email: inputEmail,
        telefono: inputTelefono,
        empresa: inputEmpresa
    }

    if ( validacion(cliente) ) {
        // Si retorna true entonces
        mostrarAlerta('Todos los campos son obligatorios.')
        return;
    }

    // Si pasa la validación opero con la API (API.js) pasándole el objeto.
    nuevoCliente(cliente);

}

})();