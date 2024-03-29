// Get the required elements
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dot-navigation');

// Initially set the first slide and dot as active
slides[0].classList.add('active');

// Generate dot navigation based on the number of slides
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-navigation-item');
    // Add event listener to each dot for navigation
    dot.addEventListener('click', () => navigateToSlide(index));
    dotsContainer.appendChild(dot);
});

// Function to navigate to a specific slide
function navigateToSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove('active'));
    const dots = dotsContainer.querySelectorAll('.dot-navigation-item');
    dots.forEach((dot) => dot.classList.remove('active'));

    // Add active class to the selected slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
};

// Automatically switch to the next slide every 5 seconds
let currentSlide = 0;
const totalSlides = slides.length;

setInterval(() => {
    // Increment current slide index and navigate to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;
    navigateToSlide(currentSlide);
}, 5000);
