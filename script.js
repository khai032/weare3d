function openModal(id) {
    // Close any open modal first
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });

    // Open the clicked modal
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modals when clicking outside
window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        console.log("Opening modal: " + modalId);
        modal.style.display = "flex";
    } else {
        console.error("Modal not found: " + modalId);
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        console.log("Closing modal: " + modalId);
        modal.style.display = "none";
    }
}
