document.addEventListener('DOMContentLoaded', function() {
    // Efectos de animación al aparecer
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efectos hover solo para dispositivos con mouse
    if (window.matchMedia("(hover: hover)").matches) {
        document.querySelectorAll('.experience-item, .education-item, .certification-item, .repository-item, .contract-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                this.style.borderLeftColor = '#2d5a27';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.borderLeftColor = '#52b788';
            });
        });

        // Efecto de escritura para el nombre
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const originalText = nameElement.textContent;
            nameElement.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    nameElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        }
    }

    // Efectos de paralax solo en desktop
    if (window.innerWidth > 1023) {
        document.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (header) {
                header.style.transform = `translateY(${rate}px)`;
            }
        });
    }
});