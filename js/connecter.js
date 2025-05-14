document.getElementById("booking-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
        guests: document.getElementById("guests").value
    };

    const response = await fetch("http://127.0.0.1:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
    });

    const result = await response.json();
    alert(result.message);
});
