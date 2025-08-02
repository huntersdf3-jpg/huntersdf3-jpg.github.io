document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slideContainer || slides.length === 0 || !prevBtn || !nextBtn) {
        console.error("Error: No se encontraron los elementos del carrusel en el DOM.");
        return;
    }

    let counter = 0;
    
    
    const getSlideWidth = () => slides[0].clientWidth;

    nextBtn.addEventListener('click', () => {
        const size = getSlideWidth();
        if (counter >= slides.length - 1) {
            counter = -1; 
        }
        counter++;
        slideContainer.style.transform = `translateX(${-size * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        const size = getSlideWidth();
        if (counter <= 0) {
            counter = slides.length; 
        }
        counter--;
        slideContainer.style.transform = `translateX(${-size * counter}px)`;
    });
});