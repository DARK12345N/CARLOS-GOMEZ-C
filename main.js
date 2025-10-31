// Manejo del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle del menú
            navLinks.classList.toggle('active'); 
            menuToggle.classList.toggle('inactive');
            
            // Prevenir scroll del body cuando el menú está abierto
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Manejar cambios de tamaño de ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Cerrar el menú móvil si está abierto
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Basic validation
        if (!nombre || !email || !mensaje) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingrese un correo electrónico válido.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.model-item, .community-section, .level').forEach(el => {
    observer.observe(el);
});

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Galería de imágenes
function initGallery() {
    const galleryGrid = document.querySelector('.galeria-grid');
    if (galleryGrid) {
        // Array con todas las imágenes de la carpeta Imagenes con categorías
        const images = [
            // Eventos - Imágenes de actividades escolares, ceremonias, etc.
            { src: 'Imagenes/IMG-20250616-WA0003.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250616-WA0005.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250616-WA0007.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250616-WA0008.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250616-WA0009.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0015.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0017.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0019.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0021.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0023.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0025.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0027.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0029.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0031.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0033.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0035.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0037.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0039.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0041.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0043.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0045.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0047.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0049.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0051.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0053.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0055.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0057.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0059.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0061.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0063.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0065.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0067.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0069.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0071.jpg', category: 'eventos', alt: 'Eventos especiales' },
            { src: 'Imagenes/IMG-20250622-WA0073.jpg', category: 'eventos', alt: 'Ceremonias escolares' },
            { src: 'Imagenes/IMG-20250622-WA0075.jpg', category: 'eventos', alt: 'Actividades escolares' },
            { src: 'Imagenes/IMG-20250622-WA0077.jpg', category: 'eventos', alt: 'Eventos del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0079.jpg', category: 'eventos', alt: 'Actividades estudiantiles' },
            { src: 'Imagenes/IMG-20250622-WA0081.jpg', category: 'eventos', alt: 'Eventos especiales' },

            // Deportes - Imágenes de actividades deportivas
            { src: 'Imagenes/IMG-20250616-WA0006.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0016.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0018.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0020.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0022.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0024.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0026.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0028.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0030.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0032.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0034.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0036.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0038.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0040.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0042.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0044.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0046.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0048.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0050.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0052.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0054.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0056.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0058.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0060.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0062.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0064.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0066.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0068.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0070.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0072.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0074.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0076.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0078.jpg', category: 'deportes', alt: 'Actividades deportivas' },
            { src: 'Imagenes/IMG-20250622-WA0080.jpg', category: 'deportes', alt: 'Deportes del colegio' },
            { src: 'Imagenes/IMG-20250622-WA0082.jpg', category: 'deportes', alt: 'Actividades deportivas' },

            // Académicos - Imágenes de clases, laboratorios, etc.
            { src: 'Imagenes/IMG-20250616-WA0004.jpg', category: 'academicos', alt: 'Actividades académicas' }
        ];

        // Crear elementos de imagen para cada imagen
        images.forEach((imageData, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            imgContainer.setAttribute('data-category', imageData.category);
            
            const img = document.createElement('img');
            img.src = imageData.src;
            img.alt = imageData.alt;
            img.loading = 'lazy';
            
            // Agregar evento click para abrir modal
            imgContainer.addEventListener('click', () => {
                openModal(imageData.src, imageData.alt);
            });
            
            imgContainer.appendChild(img);
            galleryGrid.appendChild(imgContainer);
        });

        // Inicializar filtros
        initGalleryFilters();
    }
}

// Inicializar la galería cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initGallery);

// Efecto de parallax para el hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Animación de números (si se implementa)
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        let count = 0;
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps

        const updateCount = () => {
            count += increment;
            if (count < target) {
                number.textContent = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                number.textContent = target;
            }
        };

        updateCount();
    });
}

// Inicializar animaciones cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
});

// Carrusel de imágenes
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevButton = document.querySelector('.carousel-prev');
        this.nextButton = document.querySelector('.carousel-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalTime = 5000; // 5 segundos
        this.isTransitioning = false;
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Verificar que todos los elementos necesarios existan
        if (this.slides.length === 0) {
            console.warn('No se encontraron slides en el carrusel');
            return;
        }

        if (this.indicators.length === 0) {
            console.warn('No se encontraron indicadores en el carrusel');
            return;
        }

        if (!this.prevButton || !this.nextButton) {
            console.warn('No se encontraron botones de navegación del carrusel');
            return;
        }

        // Verificar que el número de indicadores coincida con el número de slides
        if (this.slides.length !== this.indicators.length) {
            console.warn(`Número de slides (${this.slides.length}) no coincide con número de indicadores (${this.indicators.length})`);
        }

        this.init();
        this.preloadImages();
    }

    init() {
        // Iniciar el carrusel automático
        this.startSlideInterval();

        // Agregar event listeners
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());

        // Agregar event listeners a los indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Pausar el carrusel cuando el mouse está sobre él
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', () => this.stopSlideInterval());
        carousel.addEventListener('mouseleave', () => this.startSlideInterval());

        // Agregar soporte para gestos táctiles
        this.addTouchSupport();

        // Mostrar el primer slide
        this.updateSlides();
    }

    preloadImages() {
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'carousel-loading';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando imágenes...';
        document.querySelector('.carousel-container').appendChild(loadingIndicator);

        let loadedImages = 0;
        let failedImages = 0;
        const totalImages = this.slides.length;

        this.slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                // Agregar event listeners para carga exitosa y errores
                img.addEventListener('load', () => {
                    loadedImages++;
                    console.log(`Imagen ${index + 1} cargada exitosamente`);
                    this.checkAllImagesLoaded(loadedImages, failedImages, totalImages, loadingIndicator);
                });

                img.addEventListener('error', () => {
                    failedImages++;
                    console.error(`Error al cargar imagen ${index + 1}: ${img.src}`);
                    this.checkAllImagesLoaded(loadedImages, failedImages, totalImages, loadingIndicator);
                });

                // Forzar la carga de la imagen
                img.src = img.src;
            } else {
                console.warn(`No se encontró imagen en el slide ${index + 1}`);
                failedImages++;
                this.checkAllImagesLoaded(loadedImages, failedImages, totalImages, loadingIndicator);
            }
        });
    }

    checkAllImagesLoaded(loadedImages, failedImages, totalImages, loadingIndicator) {
        if (loadedImages + failedImages === totalImages) {
            setTimeout(() => {
                loadingIndicator.remove();
                if (failedImages > 0) {
                    console.warn(`${failedImages} imágenes no se pudieron cargar`);
                }
            }, 500);
        }
    }

    addTouchSupport() {
        const carousel = document.querySelector('.carousel');
        
        carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.stopSlideInterval();
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startSlideInterval();
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    startSlideInterval() {
        if (!this.slideInterval) {
            this.slideInterval = setInterval(() => this.nextSlide(), this.intervalTime);
        }
    }

    stopSlideInterval() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    updateSlides() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            }
        });

        this.indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            }
        });

        // Reset transition flag after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800); // Match this with CSS transition duration
    }

    nextSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        this.currentSlide = index;
        this.updateSlides();
    }
}

// Inicializar el carrusel cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// Funciones para el modal de la galería
function openModal(imageSrc, imageAlt) {
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.querySelector('.modal-caption');
    
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalCaption.textContent = imageAlt;
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con la X
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.gallery-modal');
    modal.style.display = 'none';
}

// Funciones para los filtros de la galería
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filter === 'all') {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else if (itemCategory === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Mostrar mensaje si no hay imágenes en la categoría seleccionada
    const visibleItems = document.querySelectorAll('.gallery-item[style*="display: block"]');
    const noImagesMessage = document.querySelector('.no-images-message');
    
    if (visibleItems.length === 0 && filter !== 'all') {
        if (!noImagesMessage) {
            const message = document.createElement('div');
            message.className = 'no-images-message';
            message.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-images" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3>No hay imágenes en esta categoría</h3>
                    <p>Prueba seleccionando otra categoría o "Todas"</p>
                </div>
            `;
            document.querySelector('.galeria-grid').appendChild(message);
        }
    } else if (noImagesMessage) {
        noImagesMessage.remove();
    }
}

// Funcionalidad para las frases educativas que cambian automáticamente
function initQuoteCarousel() {
    const quoteSlides = document.querySelectorAll('.quote-slide');
    let currentQuoteIndex = 0;
    
    if (quoteSlides.length === 0) return;
    
    function showNextQuote() {
        // Ocultar la frase actual
        quoteSlides[currentQuoteIndex].classList.remove('active');
        
        // Avanzar al siguiente índice
        currentQuoteIndex = (currentQuoteIndex + 1) % quoteSlides.length;
        
        // Mostrar la nueva frase
        quoteSlides[currentQuoteIndex].classList.add('active');
    }
    
    // Cambiar frase cada 5 segundos
    setInterval(showNextQuote, 5000);
}

// Inicializar el carrusel de frases cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    initQuoteCarousel();
});
