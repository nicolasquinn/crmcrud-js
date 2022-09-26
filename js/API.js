
const url = 'http://localhost:4000/clientes';

// Crear nuevo cliente e insertarlo en la DB.
export const nuevoCliente = async (cliente) => {

    try {
        // Hago el fetch con objeto de configuración.
        await fetch(url, {
            method: 'POST', // Uso método POST para insertar.
            body: JSON.stringify(cliente), // Inserto el objeto cliente, convirtiéndolo a JSON.
            headers: {
                'Content-Type': 'application/json',
            }
        })
        // Si el fetch se hace bien, redirijo al index.
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtener los clientes de la DB.
export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}