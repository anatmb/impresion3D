document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target); // Deja de observar cuando ya es visible
                }
            });
        },
        {
            threshold: 0.1, // Porcentaje de la sección visible antes de activarse
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth + 10; // Ancho de cada slide más el espacio (gap)
    const totalSlides = slides.length;
    const visibleSlides = 4; // Cantidad de imágenes visibles

    let currentPosition = 0;

    // Clonar las primeras imágenes para crear un efecto de bucle
    for (let i = 0; i < visibleSlides; i++) {
        const clone = slides[i].cloneNode(true);
        sliderContainer.appendChild(clone);
    }

    // Función para avanzar el slider
    function moveSlider() {
        currentPosition++;

        // Si llegamos al final, reiniciamos rápidamente el slider
        if (currentPosition > totalSlides) {
            currentPosition = 1; // Volvemos a la primera imagen
            sliderContainer.style.transition = "none"; // Desactivamos la animación temporalmente
            sliderContainer.style.transform = `translateX(0px)`;

            // Permitimos que el bucle continúe después de un pequeño retraso
            setTimeout(() => {
                sliderContainer.style.transition = "transform 0.5s ease-in-out";
                sliderContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
            }, 10);
        } else {
            // Desplazamiento normal
            sliderContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
        }
    }

    // Configurar el slider automático
    setInterval(moveSlider, 3000); // Cambia cada 3 segundos
});
