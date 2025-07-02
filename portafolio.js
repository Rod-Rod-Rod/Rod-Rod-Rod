// Actualizar indicador de dispositivo
function updateDeviceIndicator() {
    const indicator = document.getElementById('deviceIndicator');
    if (window.innerWidth < 480) {
        indicator.textContent = 'Móvil Pequeño';
    } else if (window.innerWidth < 768) {
        indicator.textContent = 'Móvil';
    } else if (window.innerWidth < 1024) {
        indicator.textContent = 'Tablet';
    } else {
        indicator.textContent = 'Desktop';
    }
}

// Inicializar y configurar eventos
document.addEventListener('DOMContentLoaded', function() {
    updateDeviceIndicator();
    window.addEventListener('resize', updateDeviceIndicator);
    
    // Animación de elementos
    const items = document.querySelectorAll('.proy-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, 300 * index);
    });
});