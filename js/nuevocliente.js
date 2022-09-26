
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
        inputNombre,
        inputEmail,
        inputTelefono,
        inputEmpresa
    }

    if ( validacion(cliente) ) {
        // Si retorna true entonces
        console.log('Todos los campos son obligatorios.');
        return;
    }

    console.log("Están todos llenos, así que sigo ejecutando el código.")

}

function validacion (obj) {
    // Validación de todos los inputs tienen que tener algo. Si al menos 1 es un string vacío, retorna true.
    return !Object.values(obj).every( input => input !== '' );
}



})();