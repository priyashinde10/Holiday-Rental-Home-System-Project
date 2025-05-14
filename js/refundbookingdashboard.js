// Sample Data for Refund Requests
const refundRequests = [
    { id: 201, name: "Liam Brown", property: "Skyline Villa", amount: "₹5000", date: "2025-03-01" },
    { id: 202, name: "Olivia Davis", property: "Beachfront Bungalow", amount: "₹3000", date: "2025-02-25" },
    { id: 203, name: "Noah Wilson", property: "Luxury Hillside", amount: "₹7000", date: "2025-02-28" }
];

// Function to populate Refund Bookings Table
const refundBookingTable = document.getElementById("refundBookingTable");

refundRequests.forEach(request => {
    let row = `<tr>
        <td>${request.id}</td>
        <td>${request.name}</td>
        <td>${request.property}</td>
        <td>${request.amount}</td>
        <td>${request.date}</td>
        <td>
            <button class="accept-btn" onclick="approveRefund(${request.id})">Approve</button>
            <button class="reject-btn" onclick="rejectRefund(${request.id})">Reject</button>
        </td>
    </tr>`;
    refundBookingTable.innerHTML += row;
});

// Functions to handle Approve and Reject actions
function approveRefund(id) {
    alert(`Refund Request ${id} Approved!`);
}

function rejectRefund(id) {
    alert(`Refund Request ${id} Rejected!`);
}
