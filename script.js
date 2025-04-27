document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modo-oscuro-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('modo-oscuro');

        if (body.classList.contains('modo-oscuro')) {
            toggleButton.textContent = 'Modo Claro';
        } else {
            toggleButton.textContent = 'Modo Oscuro';
        }
    });
});
