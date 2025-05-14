document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const roleFilter = document.getElementById("roleFilter");
    const userTable = document.getElementById("userTable");
    const addUserForm = document.getElementById("addUserForm");

    // Load users from localStorage or use default data
    let users = JSON.parse(localStorage.getItem("users")) || [
        { id: "#U001", name: "John Doe", email: "john.doe@example.com", role: "guest", status: "active" },
        { id: "#U002", name: "Emily Smith", email: "emily.smith@example.com", role: "guest", status: "inactive" },
        { id: "#U003", name: "Robert Brown", email: "robert.brown@example.com", role: "admin", status: "active" }
    ];

    // Render users to the table
    function renderUsers(userList) {
        userTable.innerHTML = "";
        userList.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status ${user.status}">${user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span></td>
                <td>
                    <button class="edit-btn"><i class="fas fa-edit"></i> Edit</button>
                    <button class="delete-btn"><i class="fas fa-trash"></i> Delete</button>
                </td>
            `;
            userTable.appendChild(row);
        });
    }

    // Initial render
    renderUsers(users);

    // Search Functionality
    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(searchText) || 
            user.email.toLowerCase().includes(searchText)
        );
        renderUsers(filteredUsers);
    });

    // Filter by Role
    roleFilter.addEventListener("change", function() {
        const selectedRole = roleFilter.value;
        const filteredUsers = selectedRole === "all" 
            ? users 
            : users.filter(user => user.role === selectedRole);
        renderUsers(filteredUsers);
    });

    // Add User Form Submission
    addUserForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newUser = {
            id: `#U${(users.length + 1).toString().padStart(3, "0")}`,
            name: document.getElementById("userName").value,
            email: document.getElementById("userEmail").value,
            role: document.getElementById("userRole").value,
            status: document.getElementById("userStatus").value
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(users);
        closeUserForm();
        addUserForm.reset();
    });
});

// Open and Close Modal
function openUserForm() {
    document.getElementById("userModal").style.display = "flex";
}

function closeUserForm() {
    document.getElementById("userModal").style.display = "none";
}