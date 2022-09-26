
export const nuevoCliente = async (cliente) => {

    const url = 'http://localhost:4000/clientes';

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