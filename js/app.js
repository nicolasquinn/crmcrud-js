import { eliminarCliente, obtenerClientes } from "./API.js";

(function() {

const listado = document.querySelector('#listado-clientes');
document.addEventListener('DOMContentLoaded', mostrarClientes);
listado.addEventListener('click', confirmarEliminacion);

async function mostrarClientes () {
    // Una vez listo el DOM, espero a que se carguen los clientes.
    const clientes = await obtenerClientes();

    // Una vez cargados, empiezo a operar con ellos creando el HTML.
    clientes.forEach( cliente => {
        const { nombre, email, telefono, empresa, id } = cliente;

        // Creo el HTML por cada cliente en la DB.
        const row = document.createElement('TR');
        row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listado.appendChild(row);

    })

}

function confirmarEliminacion (e) {
    // Referencia al <a> de eliminar
    if (e.target.classList.contains('eliminar')) {
        // Muestro un msj de confirmación
        const confirmado = confirm('¿Deseas eliminar el cliente?');
        // Si es true, entonces obtengo el ID y ejecuto la función de la API.
        if (confirmado) {
            const clienteId = e.target.dataset.cliente
            eliminarCliente(clienteId);
        }
    }
}

})();