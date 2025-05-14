document.addEventListener("DOMContentLoaded", function () {
    console.log("Facilities Dashboard Loaded");
});

function searchFeature() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#featuresTable tr");

    rows.forEach(row => {
        let featureName = row.cells[1].innerText.toLowerCase();
        if (featureName.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function openFeatureForm() {
    alert("Feature form will be opened.");
}

document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
    });
});
