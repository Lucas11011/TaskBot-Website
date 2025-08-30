// Speech bubble scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const speechBubbles = document.querySelectorAll('.speech-bubble');

    // Create intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
    });

    // Start observing all speech bubbles
    speechBubbles.forEach(bubble => {
        observer.observe(bubble);
    });

});