document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    // Sample Reviews (Can be fetched from a database)
    const reviews = [
        { name: "John Doe", rating: 5, comment: "Amazing stay! Highly recommend." },
        { name: "Jane Smith", rating: 4, comment: "Great experience, but the Wi-Fi could be better." },
    ];

    // Function to display reviews
    function displayReviews() {
        reviewList.innerHTML = "";
        reviews.forEach((review) => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");

            reviewItem.innerHTML = `
                <h3>${review.name} <span class="rating">${"⭐".repeat(review.rating)}</span></h3>
                <p>${review.comment}</p>
            `;
            reviewList.appendChild(reviewItem);
        });
    }

    // Add new review
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = parseInt(document.getElementById("rating").value);
        const comment = document.getElementById("comment").value;

        if (name && rating && comment) {
            reviews.push({ name, rating, comment });
            displayReviews();
            reviewForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Initi


