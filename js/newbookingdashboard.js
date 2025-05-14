document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const statusFilter = document.getElementById("statusFilter");
    const tableRows = document.querySelectorAll("#roomTable tr");

    // Search Functionality
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        tableRows.forEach(row => {
            const roomName = row.cells[1].textContent.toLowerCase();
            const roomType = row.cells[2].textContent.toLowerCase();
            row.style.display = (roomName.includes(searchText) || roomType.includes(searchText)) ? "" : "none";
        });
    });

    // Filter by Status
    statusFilter.addEventListener("change", function() {
        const selectedStatus = statusFilter.value;
        tableRows.forEach(row => {
            const statusCell = row.cells[4].querySelector(".status");
            row.style.display = (selectedStatus === "all" || statusCell.classList.contains(selectedStatus)) ? "" : "none";
        });
    });
});

