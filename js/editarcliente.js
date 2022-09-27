import { editarCliente, obtenerClientePorId } from "./API.js";
import { mostrarAlerta, validacion } from "./funciones.js";

(function () {

    const inputNombre   = document.querySelector('#nombre');
    const inputEmail    = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmpresa  = document.querySelector('#empresa');
    const inputId       = document.querySelector('#id');
    const formulario    = document.querySelector('#formulario');

    formulario.addEventListener('submit', validarFormulario);
    document.addEventListener('DOMContentLoaded', async () => {

        // Obtengo el ID del cliente al cual clickee editar mediante la URL.
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        // Ejecuto la función de la API para obtener el objeto/info del cliente por su ID.
        const cliente = await obtenerClientePorId(idCliente);

        // Inserto los valores en los inputs.
        mostrarCliente(cliente);

    });

    function mostrarCliente (cliente) {

        const { nombre, email, telefono, empresa, id } = cliente;

        inputNombre.value = nombre;
        inputEmail.value = email;
        inputTelefono.value = telefono;
        inputEmpresa.value = empresa;
        inputId.value = id;

    }

    function validarFormulario (e) {
        e.preventDefault();

        // Inserto en el objeto cliente los valores actualizados.
        const cliente = {
            nombre: inputNombre.value,
            email: inputEmail.value,
            telefono: inputTelefono.value,
            empresa: inputEmpresa.value,
            id: parseInt(inputId.value)
        }

        // Valido si hay algún string vacío.
        if ( validacion(cliente) ) {
            // Si retorna true entonces
            mostrarAlerta('Todos los campos son obligatorios.')
            return;
        }

        // Llamo a la función del API para editar el cliente.
        editarCliente(cliente);

    }

})();