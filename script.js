document.addEventListener('DOMContentLoaded', () => {
    console.log("El Castor está listo!");

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    function initializeCarousel(carouselClass) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(`.${carouselClass}`);
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        showSlide(currentSlide); // Show the first slide initially
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Initialize each carousel
    initializeCarousel('carousel-slide-mahindra');
    initializeCarousel('carousel-slide-peugeot');
    initializeCarousel('carousel-slide-grua');
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}
