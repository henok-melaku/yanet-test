// slider.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize the first slide
function showSlide(index) {
    const offset = -index * 100; // Calculate offset for sliding effect
    document.querySelector('.hero-slider').style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Show the first slide
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(nextSlide, 5000);
