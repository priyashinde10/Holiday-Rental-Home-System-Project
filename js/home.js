// Add event listener for the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    // Toggle the visibility of the dropdown when the button is clicked
    const dropdownButton = document.querySelector('.button');
    const dropdownContent = dropdownButton.querySelector('.dropdown-content');
    
    dropdownButton.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.button') && !event.target.matches('.button *')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Handle the search booking form submission
    const searchButton = document.querySelector('.booking-box button');
    searchButton.addEventListener('click', function() {
        // Fetch user inputs from the form
        const checkInDate = document.getElementById('check-in').value;
        const checkOutDate = document.getElementById('check-out').value;
        const adultCount = document.getElementById('adult').value;
        const childrenCount = document.getElementById('children').value;

        // Validate input fields
        if (checkInDate && checkOutDate && adultCount && childrenCount) {
            // Create a URL with query parameters based on input values
            const searchURL = `search.html?checkIn=${checkInDate}&checkOut=${checkOutDate}&adults=${adultCount}&children=${childrenCount}`;
            window.location.href = searchURL; // Navigate to search page with query parameters
        } else {
            alert("Please fill out all the fields!");
        }
    });

    // Form validation for login page
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                alert('Please enter both username and password.');
            } else {
                // Assuming successful login, you can redirect to admin dashboard or user dashboard
                alert('Login successful!');
                window.location.href = 'admin-dashboard.html'; // Example redirection for admin login
            }
        });
    }
    const images = [
        'property1.jpg',
        'property2.jpg',
        'property3.jpg',
        'property4.jpg',
        'bgimg.jpeg',
    ];
    // Book a stay form validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const dateFrom = document.getElementById('from-date').value;
            const dateTo = document.getElementById('to-date').value;
            const adults = document.getElementById('num-adults').value;
            const children = document.getElementById('num-children').value;

            if (dateFrom === '' || dateTo === '' || adults === '' || children === '') {
                alert('All fields are required.');
            } else {
                alert('Booking successfully made!');
                window.location.href = 'thankyou.html'; // Example redirection after booking
            }
        });
    }
});

// Scroll to top function for user convenience
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: Auto-close feedback section after a few seconds
setTimeout(function() {
    const feedbackSection = document.querySelector('#feedback');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
}, 5000); // Feedback will be hidden after 5 seconds

// Handle window resizing for responsive design (optional)
window.addEventListener('resize', function() {
    const heroSection = document.querySelector('.hero');
    if (window.innerWidth < 768) {
        heroSection.style.height = '600px'; // Adjust hero image height for smaller screens
    } else {
        heroSection.style.height = '800px'; // Reset to default for larger screens
    }
});


