// Función para enviar mensaje por WhatsApp desde el formulario
function enviarWhatsApp() {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validar que los campos obligatorios estén llenos
    if (!nombre || !telefono || !servicio) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }
    
    // Crear el mensaje para WhatsApp
    let textoWhatsApp = `¡Hola PaolaNails! 👋\n\n`;
    textoWhatsApp += `Me llamo *${nombre}*\n`;
    textoWhatsApp += `Mi teléfono es: *${telefono}*\n`;
    textoWhatsApp += `Estoy interesada en el servicio: *${servicio}*\n`;
    
    if (mensaje.trim()) {
        textoWhatsApp += `\nMensaje adicional:\n${mensaje}`;
    }
    
    textoWhatsApp += `\n\n¡Espero tu respuesta! 💅✨`;
    
    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(textoWhatsApp);
    
    // Crear la URL de WhatsApp
    const numeroWhatsApp = '593968579842';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    return false;
}

// Función para animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .contact-card, .social-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Función para el menú móvil (hamburguesa)
function setupMobileMenu() {
    // Crear botón hamburguesa si no existe
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.cssText = `
            display: block;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        navbar.insertBefore(mobileMenuBtn, navLinks);
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });
        
        // Agregar estilos para el menú móvil activo
        if (!document.querySelector('#mobile-menu-styles')) {
            const style = document.createElement('style');
            style.id = 'mobile-menu-styles';
            style.textContent = `
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: linear-gradient(135deg, #ff6b9d, #c44569);
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    }
                    .nav-links.mobile-active {
                        display: flex;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Función para botón de WhatsApp flotante
function createFloatingWhatsAppButton() {
    const floatingBtn = document.createElement('a');
    floatingBtn.href = 'https://wa.me/593968579842';
    floatingBtn.target = '_blank';
    floatingBtn.classList.add('floating-whatsapp');
    floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    // Estilos para el botón flotante
    floatingBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #25d366;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        text-decoration: none;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
    `;
    
    // Agregar animación de pulso
    const pulseAnimation = document.createElement('style');
    pulseAnimation.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
            50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.8); }
            100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
        }
    `;
    document.head.appendChild(pulseAnimation);
    
    floatingBtn.addEventListener('mouseenter', () => {
        floatingBtn.style.transform = 'scale(1.1)';
        floatingBtn.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.6)';
    });
    
    floatingBtn.addEventListener('mouseleave', () => {
        floatingBtn.style.transform = 'scale(1)';
        floatingBtn.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
    });
    
    document.body.appendChild(floatingBtn);
}

// Función para smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para precargar imágenes
function preloadImages() {
    const images = [
        'img/portada.jpg',
        'img/salon.jpg',
        'img/servicio1.jpg',
        'img/servicio2.jpg',
        'img/servicio3.jpg',
        'img/servicio4.jpg',
        'img/servicio5.jpg',
        'img/servicio6.jpg'
    ];
    
    // Agregar imágenes del carrusel
    for (let i = 1; i <= 19; i++) {
        if (i !== 4) { // Saltar unas4.jpg ya que no existe
            images.push(`img/unas${i}.jpg`);
        }
    }
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Función para validación de formulario en tiempo real
function setupFormValidation() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remover errores previos
    clearError(e);
    
    if (field.required && !value) {
        showError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field, 'Por favor ingresa un email válido');
            return false;
        }
    }
    
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9\-\+\s\(\)]+$/;
        if (!phoneRegex.test(value)) {
            showError(field, 'Por favor ingresa un número de teléfono válido');
            return false;
        }
    }
    
    return true;
}

function showError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    let errorDiv = field.parentNode.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.8rem; margin-top: 0.25rem;';
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearError(e) {
    const field = e.target;
    field.style.borderColor = '#e9ecef';
    
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 5px;
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    animateOnScroll();
    setupMobileMenu();
    createFloatingWhatsAppButton();
    setupSmoothScroll();
    preloadImages();
    setupFormValidation();
    initCarousel();
    
    console.log('✅ PaolaNails - Website loaded successfully!');
});

// Redimensionar ventana
window.addEventListener('resize', function() {
    setupMobileMenu();
});

// Variables globales para el carrusel
let currentIndex = 0;
let totalImages = 0;
let autoSlideInterval;

// Función para inicializar el carrusel
function initCarousel() {
    const imagenes = document.getElementById('imagenes');
    if (!imagenes) return;
    
    totalImages = imagenes.children.length;
    
    // Iniciar auto-slide cada 4 segundos
    startAutoSlide();
    
    // Pausar auto-slide al hacer hover
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
        carrusel.addEventListener('mouseenter', stopAutoSlide);
        carrusel.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Agregar soporte para touch/swipe en móviles
    addTouchSupport();
}

// Función para mover el carrusel (la función que ya tenías)
function mover(direction) {
    const imagenes = document.getElementById('imagenes');
    if (!imagenes) return;
    
    currentIndex += direction;
    
    // Loop infinito
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    
    // Aplicar transformación
    const translateX = -currentIndex * 100;
    imagenes.style.transform = `translateX(${translateX}%)`;
    
    // Reiniciar el auto-slide
    stopAutoSlide();
    startAutoSlide();
}

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        mover(1);
    }, 4000); // Cambiar imagen cada 4 segundos
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Soporte para touch/swipe en móviles
function addTouchSupport() {
    const carrusel = document.querySelector('.carrusel');
    if (!carrusel) return;
    
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    carrusel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    carrusel.addEventListener('touchmove', (e) => {
        // Prevenir scroll vertical si se está haciendo swipe horizontal
        const deltaX = Math.abs(e.touches[0].clientX - startX);
        const deltaY = Math.abs(e.touches[0].clientY - startY);
        
        if (deltaX > deltaY) {
            e.preventDefault();
        }
    });
    
    carrusel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const deltaX = startX - endX;
        const deltaY = startY - endY;
        
        // Solo procesar swipe si es principalmente horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe left -> próxima imagen
                mover(1);
            } else {
                // Swipe right -> imagen anterior
                mover(-1);
            }
        }
    });
}

// Función para precargar imágenes del carrusel
function preloadCarouselImages() {
    const carouselImages = [];
    for (let i = 1; i <= 19; i++) {
        if (i !== 4) { // Saltar unas4.jpg ya que no existe
            carouselImages.push(`img/unas${i}.jpg`);
        }
    }
    
    carouselImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Control por teclado (opcional)
document.addEventListener('keydown', (e) => {
    if (document.querySelector('.carrusel:hover')) {
        if (e.key === 'ArrowLeft') {
            mover(-1);
        } else if (e.key === 'ArrowRight') {
            mover(1);
        }
    }
});

// Exportar funciones para uso global
window.enviarWhatsApp = enviarWhatsApp;
window.showNotification = showNotification;
window.mover = mover;
