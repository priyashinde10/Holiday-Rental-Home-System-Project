document.addEventListener("DOMContentLoaded", () => {
    const saveProfileBtn = document.querySelector(".save-btn");
    const saveSettingsBtn = document.querySelectorAll(".save-btn")[1];

    saveProfileBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username && email) {
            alert("Profile settings updated successfully!");
        } else {
            alert("Please fill in all fields.");
        }
    });

    saveSettingsBtn.addEventListener("click", () => {
        const is2FAEnabled = document.getElementById("2fa").checked;
        const isNotificationsEnabled = document.getElementById("notifications").checked;
        const theme = document.getElementById("theme").value;

        alert(`Settings Saved:\n2FA: ${is2FAEnabled}\nNotifications: ${isNotificationsEnabled}\nTheme: ${theme}`);
    });
});
