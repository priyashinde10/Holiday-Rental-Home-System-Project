// Sidebar Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-menu').classList.toggle('show');
        });
    });
});