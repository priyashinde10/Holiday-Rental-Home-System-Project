document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const form = document.querySelector('form');
    const fullName = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const phone = document.querySelector('input[type="tel"]');
    const address = document.querySelector('textarea');
    const password = document.querySelector('input[type="password"]:nth-of-type(1)');
    const confirmPassword = document.querySelector('input[type="password"]:nth-of-type(2)');
    const submitButton = document.querySelector('.button');
  
    // Validate email format
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
  
    // Check if passwords match
    function validatePasswords(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Display error message
    function displayError(input, message) {
        const errorSpan = document.createElement('span');
        errorSpan.style.color = '#ff6b6b';
        errorSpan.textContent = message;
        input.parentElement.appendChild(errorSpan);
        input.style.borderColor = '#ff6b6b';
    }
  
    // Remove error messages
    function removeError(input) {
        const errorSpan = input.parentElement.querySelector('span');
        if (errorSpan) {
            errorSpan.remove();
        }
        input.style.borderColor = '#A31D1D'; // Reset border color
    }

    // Form validation on submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous error messages
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            removeError(input);
        });

        // Validate Full Name
        if (fullName.value.trim() === "") {
            displayError(fullName, "Full name is required.");
            isValid = false;
        }

        // Validate Email
        if (email.value.trim() === "") {
            displayError(email, "Email is required.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            displayError(email, "Please enter a valid email.");
            isValid = false;
        }

        // Validate Phone Number
        if (phone.value.trim() === "") {
            displayError(phone, "Phone number is required.");
            isValid = false;
        }

        // Validate Address
        if (address.value.trim() === "") {
            displayError(address, "Address is required.");
            isValid = false;
        }

        // Validate Password
        if (password.value.trim() === "") {
            displayError(password, "Password is required.");
            isValid = false;
        }

        // Validate Confirm Password
        if (confirmPassword.value.trim() === "") {
            displayError(confirmPassword, "Please confirm your password.");
            isValid = false;
        } else if (!validatePasswords(password.value, confirmPassword.value)) {
            displayError(confirmPassword, "Passwords do not match.");
            isValid = false;
        }

        // If all is valid, submit the form (for demo purposes, we'll log success)
        if (isValid) {
            alert('Registration Successful!');
            // Here, you can submit the form to the server
            form.reset();
        }
    });
});


