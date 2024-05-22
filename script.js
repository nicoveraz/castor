document.addEventListener('DOMContentLoaded', () => {
    console.log("El Castor está listo!");

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
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

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(currentSlide); // Show the first slide initially
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

// let slideIndex = 0;
// showSlides(); // Start the slideshow

// function showSlides() {
//     let slides = document.getElementsByClassName("carousel-slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
//     slides[slideIndex - 1].classList.add("active");
//     setTimeout(showSlides, 6000); // Change slide every 3 seconds
// }
