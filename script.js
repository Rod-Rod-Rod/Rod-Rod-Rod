// ============================================
// ⚠️  IMPORTANTE - CONFIGURACIÓN DE CONTACTO
// ============================================
// El formulario de contacto usa FORMSPREE para enviar emails
// 
// PASOS PARA ACTIVARLO:
// 1. Ve a https://formspree.io
// 2. Crea una cuenta (gratis)
// 3. Crea un nuevo formulario
// 4. Copia el FORM_ID (ej: abc123xyz456)
// 5. Reemplaza 'TU_FORM_ID' en la línea 26 con tu ID
//
// Ver: INSTRUCCIONES-CONTACTO.md para detalles completos
// ============================================

// ============================================
// NAVIGATION MOBILE TOGGLE
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// CONTACT FORM - FORMSPREE INTEGRATION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const submitBtn = document.getElementById('submitBtn');
        const formMessage = document.getElementById('formMessage');
        
        // Simple validation
        if (!nombre || !email || !asunto || !mensaje) {
            showFormMessage('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        try {
            // Send to Formspree
            const formspreeEndpoint = 'https://formspree.io/f/xjgdwbpw';
            
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: nombre,
                    email: email,
                    subject: asunto,
                    message: mensaje,
                    _replyto: email,
                    _subject: asunto
                })
            });
            
            if (response.ok) {
                showFormMessage('✓ ¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
                contactForm.reset();
            } else {
                showFormMessage('Error al enviar el mensaje. Por favor intenta de nuevo.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('Error de conexión. Por favor verifica tu conexión a internet.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
        }
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    
    if (type === 'success') {
        formMessage.style.background = '#d4edda';
        formMessage.style.color = '#155724';
        formMessage.style.border = '1px solid #c3e6cb';
    } else {
        formMessage.style.background = '#f8d7da';
        formMessage.style.color = '#721c24';
        formMessage.style.border = '1px solid #f5c6cb';
    }
    
    // Auto-hide message after 5 seconds (success) or 10 seconds (error)
    setTimeout(() => {
        if (type === 'success') {
            formMessage.style.display = 'none';
        }
    }, type === 'success' ? 5000 : 10000);
}

// ============================================
// SMOOTH SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to cards on page load
document.querySelectorAll('.repo-card, .project-card, .contact-method, .stat').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🌿 Hola Visitante!', 'font-size: 20px; color: #7e8c54; font-weight: bold;');
console.log('%cGracias por explorar mi portafolio.', 'font-size: 14px; color: #333;');
console.log('%cHecho con naturalidad y código limpio ✨', 'font-size: 12px; color: #7e8c54; font-style: italic;');
