document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const statusFilter = document.getElementById("statusFilter");
    const tableRows = document.querySelectorAll("#bookingTable tbody tr");

    // Search Functionality
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        tableRows.forEach(row => {
            const name = row.cells[1].textContent.toLowerCase();
            const id = row.cells[0].textContent.toLowerCase();
            row.style.display = (name.includes(searchText) || id.includes(searchText)) ? "" : "none";
        });
    });

    // Filter by Status
    statusFilter.addEventListener("change", function() {
        const selectedStatus = statusFilter.value;
        tableRows.forEach(row => {
            const statusCell = row.cells[5];
            if (selectedStatus === "" || statusCell.textContent === selectedStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Approve & Cancel Buttons
    document.querySelectorAll(".approve-btn").forEach(button => {
        button.addEventListener("click", function() {
            const row = this.closest("tr");
            row.querySelector(".status").textContent = "Confirmed";
            row.querySelector(".status").classList.add("Confirmed");
            this.disabled = true;
        });
    });

    document.querySelectorAll(".cancel-btn").forEach(button => {
        button.addEventListener("click", function() {
            const row = this.closest("tr");
            row.querySelector(".status").textContent = "Cancelled";
            row.querySelector(".status").classList.add("Cancelled");
        });
    });
});
