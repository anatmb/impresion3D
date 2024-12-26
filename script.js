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