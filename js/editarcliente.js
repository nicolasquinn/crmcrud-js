import { obtenerClientePorId } from "./API.js";

(function () {

    const inputNombre   = document.querySelector('#nombre');
    const inputEmail    = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmpresa  = document.querySelector('#empresa');
    const inputId       = document.querySelector('#id');

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

})();