// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Facilities container and individual facility elements
    const facilities = document.querySelectorAll('.facility');

    // Hover animation: Add animation when hovering over a facility card
    facilities.forEach(facility => {
        facility.addEventListener('mouseenter', function () {
            facility.style.transform = 'scale(1.05)';
            facility.style.transition = 'transform 0.3s ease';
        });

        facility.addEventListener('mouseleave', function () {
            facility.style.transform = 'scale(1)';
        });
    });
});
