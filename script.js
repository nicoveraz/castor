document.addEventListener('DOMContentLoaded', () => {
    console.log("El Castor está listo!");

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
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

