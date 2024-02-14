document.addEventListener("DOMContentLoaded", function() {
    // Get all slides and dots
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');

    // Set the current slide and dot index
    var currentSlide = 0;

    // Show the first slide and activate the corresponding dot
    showSlide(currentSlide);

    // Add event listener to each dot for navigation
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Function to show a slide and update active dot
    function showSlide(index) {
        // Hide all slides
        slides.forEach(function(slide) {
            slide.style.display = 'none';
        });
        // Deactivate all dots
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        // Show the selected slide
        slides[index].style.display = 'block';
        // Activate the corresponding dot
        dots[index].classList.add('active');
        // Update current slide index
        currentSlide = index;
    }
});
