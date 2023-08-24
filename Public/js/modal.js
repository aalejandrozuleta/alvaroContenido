document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".verTrailer");
    const modals = document.querySelectorAll(".modalTrailer")

    openModalButtons.forEach(button =>{
        button.addEventListener("click", function () {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";

            const closeButton = modal.querySelector(".remove");
            closeButton.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });
    });

    modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none"
            }
            
        });
    });


});