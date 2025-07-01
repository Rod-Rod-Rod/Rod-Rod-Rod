document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }
                });
            }, {
                threshold: 0.1
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // Efecto hover en elementos de experiencia
        document.querySelectorAll('.experience-item, .education-item, .certification-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
            });
        });

        // Efecto de escritura para el nombre
        document.addEventListener('DOMContentLoaded', function() {
            const nameElement = document.querySelector('.name');
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
        });

        // Efectos de paralax sutiles
        document.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (header) {
                header.style.transform = `translateY(${rate}px)`;
            }
        });