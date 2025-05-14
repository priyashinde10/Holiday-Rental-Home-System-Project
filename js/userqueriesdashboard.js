function resolveQuery(button) {
    let row = button.parentElement.parentElement;
    let statusCell = row.querySelector('.status');
    statusCell.textContent = "Resolved";
    statusCell.classList.remove("pending");
    statusCell.classList.add("resolved");
    button.remove();
}
function deleteQuery(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
function searchQuery() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#queryTable tr");
    rows.forEach(row => {
        let name = row.cells[1].textContent.toLowerCase();
        let email = row.cells[2].textContent.toLowerCase();
        row.style.display = name.includes(input) || email.includes(input) ? "" : "none";
    });
}
function filterQueries() {
    let filter = document.getElementById("statusFilter").value;
    let rows = document.querySelectorAll("#queryTable tr");
    rows.forEach(row => {
        let status = row.cells[4].textContent.toLowerCase();
        row.style.display = filter === "all" || status.includes(filter) ? "" : "none";
    });
}