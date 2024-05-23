document.addEventListener('DOMContentLoaded', () => {
    console.log("El Castor está listo!");

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    let currentSlideTop = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlideTop = (currentSlideTop + 1) % totalSlides;
        showSlide(currentSlideTop);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(currentSlideTop); // Show the first slide initially

    function initializeCarousel(carouselClass, delayInMillisecond) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(`.${carouselClass}`);
        const totalSlides = slides.length;

        // Ensure the first slide is visible initially
        slides.forEach((slide, i) => {
            slide.style.opacity = i === currentSlide ? '1' : '0';
        });

        function showSlide(index) {
            slides[currentSlide].style.opacity = '0';
            slides[index].style.opacity = '1';
            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % totalSlides;
            showSlide(nextIndex);
        }

        showSlide(currentSlide); // Show the first slide initially
        setInterval(nextSlide, 3000 + delayInMillisecond); // Change slide every 3 seconds
    }

    // Initialize each carousel independently, with 3000ms delay between them

    initializeCarousel('carousel-slide-mahindra', 0);
    initializeCarousel('carousel-slide-peugeot', 1000);
    initializeCarousel('carousel-slide-grua', 2000);
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

let slideIndex = 0;
showSlides(); // Start the slideshow

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 6000); // Change slide every 3 seconds
}

