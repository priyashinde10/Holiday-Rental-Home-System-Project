document.getElementById("forgot-password-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to validate first
  
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    
    // Simple email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (email === "") {
      alert("Please enter your registered email address.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // If validation passes, show a success message (you can also proceed with sending an actual request)
    alert("A reset link has been sent to your email address.");
    
    // Optionally, redirect to the login page or clear the form for further actions:
    // window.location.href = "login.html"; // Uncomment to redirect after success
    // or reset the form if needed:
    // event.target.reset();
  });
  