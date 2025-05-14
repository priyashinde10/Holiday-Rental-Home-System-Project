// Navbar Toggle for Mobile View
document.addEventListener("DOMContentLoaded", function () {
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
        const targetId = this.getAttribute("href").substring(0);
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Auto Update Footer Year
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".footer-bottom p").innerHTML = `© ${new Date().getFullYear()} OviStay | All Rights Reserved.`;
});

// Scroll Animation for Sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
