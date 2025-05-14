document.addEventListener("DOMContentLoaded", () => {
    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("fileInput");
    const imageList = document.getElementById("imageList");

    dropArea.addEventListener("click", () => fileInput.click());

    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.style.background = "#D4B48C";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.background = "#E5D0AC";
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.style.background = "#E5D0AC";
        handleFiles(event.dataTransfer.files);
    });

    fileInput.addEventListener("change", () => {
        handleFiles(fileInput.files);
    });

    function handleFiles(files) {
        for (const file of files) {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    addImageToList(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    function addImageToList(src) {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const img = document.createElement("img");
        img.src = src;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            imageItem.remove();
        });

        imageItem.appendChild(img);
        imageItem.appendChild(deleteBtn);
        imageList.appendChild(imageItem);
    }
});
