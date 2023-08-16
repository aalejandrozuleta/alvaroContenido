const pelis = document.querySelector(".pelis");
const images = pelis.querySelectorAll(".imageDrama");
let currentIndex = 0;

function scrollIzquierda() {
    currentIndex = (currentIndex - 2 + images.length) % images.length;
    updateSlider();
}

function scrollDerecha() {
    currentIndex = (currentIndex + 2) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateValue = -currentIndex * 9.66;
    pelis.style.transform = `translateX(${translateValue}%)`;
}