// Filter and booking functions

document.addEventListener('DOMContentLoaded', () => {
    // Handle filter form submission
    const filterForm = document.querySelector('.filters');
    const propertyCards = document.querySelectorAll('.property-card');
    
    // Filter functionality
    const checkAvailability = () => {
        const checkInDate = document.querySelector('input[type="date"]:nth-child(1)').value;
        const checkOutDate = document.querySelector('input[type="date"]:nth-child(2)').value;
        const selectedFacilities = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked')).map(input => input.nextElementSibling.textContent.trim());

        propertyCards.forEach(card => {
            const facilities = card.querySelector('.details p:nth-child(2)').textContent.trim().split(', ').map(facility => facility.trim());
            const isAvailable = checkInDate && checkOutDate; // Placeholder for availability check
            const hasSelectedFacilities = selectedFacilities.every(facility => facilities.includes(facility));
            
            // Hide properties that don't match the filters
            if ((checkInDate && checkOutDate && isAvailable) && hasSelectedFacilities) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Listen for filter changes
    filterForm.addEventListener('input', checkAvailability);



    // Book Now button action
    const bookButtons = document.querySelectorAll('.book-now');
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyName = button.closest('.property-card').querySelector('.details h3').textContent;
            alert(`Booking initiated for ${propertyName}`);
        });
    });

    // Reset filters (optional)
    const resetFilters = document.querySelector('.filters button[type="reset"]');
    if (resetFilters) {
        resetFilters.addEventListener('click', () => {
            propertyCards.forEach(card => card.style.display = 'flex'); // Show all properties
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const propertyCards = document.querySelectorAll('.property-card');
    const bookingPage = document.getElementById('booking-page');
    const bookingForm = document.getElementById('booking-form');
    const villaNameInput = document.getElementById('villa-name');
    const receiptPopup = document.getElementById('receipt-popup');
    const receiptMessage = document.getElementById('receipt-message');
    const closeReceipt = document.getElementById('close-receipt');
    const confirmBooking = document.getElementById('confirm-booking');

    // Open booking form when "Book Now" is clicked
    document.querySelectorAll('.book-now').forEach(button => {
        button.addEventListener('click', () => {
            const propertyCard = button.closest('.property-card');
            const propertyName = propertyCard.getAttribute('data-villa');
            villaNameInput.value = propertyName;
            bookingPage.style.display = 'flex';
            console.log('Book Now clicked for:', propertyName);
        });
    });

    // Handle confirm booking button click
    confirmBooking.addEventListener('click', () => {
        console.log('Confirm Booking button clicked');

        const fullName = document.getElementById('full-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const villaName = villaNameInput.value;

        // Validate form
        if (!fullName || !phoneNumber || !email || !checkIn || !checkOut || !paymentMethod || !villaName) {
            alert('Please fill all required fields!');
            console.log('Validation failed:', { fullName, phoneNumber, email, checkIn, checkOut, paymentMethod, villaName });
            return;
        }

        // Calculate total nights and price
        const propertyCard = document.querySelector(`.property-card[data-villa="${villaName}"]`);
        if (!propertyCard) {
            alert('Villa not found!');
            console.error('Villa not found:', villaName);
            return;
        }

        const pricePerNight = parseInt(
            propertyCard.querySelector('.price').textContent.replace(/[^0-9]/g, '')
        );
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        const totalPrice = pricePerNight * nights;

        if (isNaN(totalPrice) || nights <= 0) {
            alert('Invalid date range or price calculation!');
            console.error('Invalid calculation:', { pricePerNight, nights, totalPrice });
            return;
        }

        // Display confirmation message
        receiptMessage.innerHTML = `
            Your booking has been confirmed!<br>
            You will receive your receipt on your email (${email}).<br><br>
            <strong>Booking Details:</strong><br>
            Villa: ${villaName}<br>
            Name: ${fullName}<br>
            Phone: ${phoneNumber}<br>
            Check-in: ${checkIn}<br>
            Check-out: ${checkOut}<br>
            Nights: ${nights}<br>
            Total Price: ₹${totalPrice}<br>
            Payment Method: ${paymentMethod}
        `;
        bookingPage.style.display = 'none';
        receiptPopup.style.display = 'flex';
        console.log('Booking confirmed for:', villaName);
    });

    // Close receipt popup
    closeReceipt.addEventListener('click', () => {
        receiptPopup.style.display = 'none';
        bookingForm.reset();
        console.log('Receipt popup closed');
    });

    // Filter functionality
    const filterForm = document.querySelector('.filters');
    filterForm.addEventListener('input', () => {
        const checkInDate = document.querySelector('input[type="date"]:nth-child(1)').value;
        const checkOutDate = document.querySelector('input[type="date"]:nth-child(2)').value;
        const selectedFacilities = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked'))
            .map(input => input.nextElementSibling.textContent.trim());

        propertyCards.forEach(card => {
            const facilities = card.querySelector('.details p:nth-child(2)').textContent.trim().split(', ').map(f => f.trim());
            const hasSelectedFacilities = selectedFacilities.every(facility => facilities.includes(facility));
            if ((checkInDate && checkOutDate) && hasSelectedFacilities) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});



