// Define the updateSlider function
function updateSlider(container, currentIndex) {
    const translateValue = -currentIndex * 9.66;
    container.style.transform = `translateX(${translateValue}%)`;
}

// Drama section
const dramaImages = document.querySelectorAll("#imageDramaContainer .imageDrama");
let dramaCurrentIndex = 0;

function scrollIzquierdaDrama() {
    dramaCurrentIndex = (dramaCurrentIndex - 2 + dramaImages.length) % dramaImages.length;
    updateSlider(document.getElementById('imageDramaContainer'), dramaCurrentIndex);
}

function scrollDerechaDrama() {
    dramaCurrentIndex = (dramaCurrentIndex + 2) % dramaImages.length;
    updateSlider(document.getElementById('imageDramaContainer'), dramaCurrentIndex);
}

// Comedia section
const comediaImages = document.querySelectorAll("#imageComediaContainer .imageDrama");
let comediaCurrentIndex = 0;

function scrollIzquierdaComedia() {
    comediaCurrentIndex = (comediaCurrentIndex - 2 + comediaImages.length) % comediaImages.length;
    updateSlider(document.getElementById('imageComediaContainer'), comediaCurrentIndex);
}

function scrollDerechaComedia() {
    comediaCurrentIndex = (comediaCurrentIndex + 2) % comediaImages.length;
    updateSlider(document.getElementById('imageComediaContainer'), comediaCurrentIndex);
}

// Animación section
const animacionImages = document.querySelectorAll("#imageAnimacionContainer .imageDrama");
let animacionCurrentIndex = 0;

function scrollIzquierdaAnimacion() {
    animacionCurrentIndex = (animacionCurrentIndex - 2 + animacionImages.length) % animacionImages.length;
    updateSlider(document.getElementById('imageAnimacionContainer'), animacionCurrentIndex);
}

function scrollDerechaAnimacion() {
    animacionCurrentIndex = (animacionCurrentIndex + 2) % animacionImages.length;
    updateSlider(document.getElementById('imageAnimacionContainer'), animacionCurrentIndex);
}

// Repeat the same structure for other genre sections if needed


// Repeat the same structure for other genres
