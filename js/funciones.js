export function mostrarAlerta (msj) {

    const alertaExiste = document.querySelector('.bg-red-100');
    
    // Valido si existe un alerta
    if (!alertaExiste) {
        
        // Scripting HTML y diseño.
        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')

        const strong = document.createElement('STRONG');
        strong.classList.add('font-bold', 'uppercase');
        strong.textContent = 'ERROR';

        const span = document.createElement('SPAN');
        span.classList.add('block', 'font-normal');
        span.textContent = msj;

        const formulario = document.querySelector('#formulario');

        strong.appendChild(span);
        alerta.appendChild(strong);
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3500);

    }



}