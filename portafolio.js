// Actualizar indicador de dispositivo
function updateDeviceIndicator() {
    const indicator = document.getElementById('deviceIndicator');
    if (indicator) {
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
}

// Inicializar y configurar eventos
document.addEventListener('DOMContentLoaded', function() {
    updateDeviceIndicator();
    window.addEventListener('resize', updateDeviceIndicator);
    
    // Animación de elementos con un pequeño retraso
    setTimeout(() => {
        const items = document.querySelectorAll('.proy-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0.5';
            }, 500 * index);
        });
    }, 1000);
    
    // Animar barras de lenguajes después de que se cargue la página
    setTimeout(() => {
        animateLanguageBars();
    }, 100);
});

function animateLanguageBars() {
    const languageSegments = document.querySelectorAll('.language-segment');
    
    languageSegments.forEach(segment => {
        segment.style.width = '0%';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const segment = entry.target;
                const percentage = segment.getAttribute('data-percentage');
                
                // Pequeño retraso antes de animar
                setTimeout(() => {
                    segment.style.width = percentage + '%';
                    segment.classList.add('animated');
                }, 1000);
                
                observer.unobserve(segment);
            }
        });
    }, { threshold: 0.5 });
    
    // Observar cada segmento
    languageSegments.forEach(segment => {
        observer.observe(segment);
    });
    
    setTimeout(() => {
        languageSegments.forEach(segment => {
            if (!segment.classList.contains('animated')) {
                const percentage = segment.getAttribute('data-percentage');
                segment.style.width = percentage + '%';
                segment.classList.add('animated');
            }
        });
    }, 1000);
}