document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", searchHotels);
});

async function searchHotels() {
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const adults = document.getElementById("adult").value;
    const children = document.getElementById("children").value;

    if (!checkIn || !checkOut) {
        alert("Please select check-in and check-out dates.");
        return;
    }

    const apiUrl = `https://api.example.com/hotels?checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayResults(data);
    } catch (error) {
        console.error("Error fetching hotel data:", error);
        alert("Failed to fetch hotel availability. Try again later.");
    }
}

function displayResults(hotels) {
    const resultsContainer = document.getElementById("hotel-results");
    resultsContainer.innerHTML = "";

    if (hotels.length === 0) {
        resultsContainer.innerHTML = "<p>No hotels found.</p>";
        return;
    }

    hotels.forEach(hotel => {
        const hotelCard = document.createElement("div");
        hotelCard.className = "hotel-card";
        hotelCard.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>${hotel.location}</p>
            <p>Price: $${hotel.price} per night</p>
            <button onclick="bookHotel('${hotel.id}')">Book Now</button>
        `;
        resultsContainer.appendChild(hotelCard);
    });
}

function bookHotel(hotelId) {
    alert(`Redirecting to booking page for hotel ID: ${hotelId}`);
}
