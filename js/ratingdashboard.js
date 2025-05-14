// Search reviews by name or email
function searchReviews() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#reviewsTable tr");

    rows.forEach(row => {
        let name = row.cells[1].textContent.toLowerCase();
        let email = row.cells[2].textContent.toLowerCase();
        row.style.display = (name.includes(input) || email.includes(input)) ? "" : "none";
    });
}

// Filter reviews by rating
function filterReviews() {
    let filterValue = document.getElementById("ratingFilter").value;
    let rows = document.querySelectorAll("#reviewsTable tr");

    rows.forEach(row => {
        let rating = row.cells[3].textContent.length;
        row.style.display = (filterValue === "all" || rating == filterValue) ? "" : "none";
    });
}

// Delete review
function deleteReview(button) {
    button.closest("tr").remove();
}
