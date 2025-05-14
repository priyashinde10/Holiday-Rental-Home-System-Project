// Navbar Toggle for Mobile View
window.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.classList.add("menu-toggle");

    const nav = document.querySelector("nav");
    const ul = document.querySelector("nav ul");
    nav.insertBefore(menuToggle, ul);

    menuToggle.addEventListener("click", function () {
        ul.classList.toggle("active");
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Auto Update Footer Year
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".footer-bottom p").innerHTML = `© ${new Date().getFullYear()} OviStay | All Rights Reserved.`;
});
