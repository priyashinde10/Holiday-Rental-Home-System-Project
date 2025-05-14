// Function to handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting before validation
  
    // Get values from the input fields
    const emailPhone = document.querySelector('.input input[type="text"]').value.trim();
    const password = document.querySelector('.input input[type="password"]').value.trim();
  
    // Validate the email/phone and password fields
    if (!emailPhone) {
      showError('Email/Phone Number is required');
    } else if (!password) {
      showError('Password is required');
    } else {
      // If both fields are filled, you can submit the form (for demo purposes, we'll just log the data)
      console.log('Login Details:', { emailPhone, password });
  
      // Simulate successful login (in a real scenario, you'd validate the details on the server)
      showSuccess('Login successful!');
    }
  });
  
  