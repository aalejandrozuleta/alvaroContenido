
function updateSlider(container, currentIndex) {
    const translateValue = -currentIndex * 18;
    container.style.transform = `translateX(${translateValue}%)`;
}


const dramaImages = document.querySelectorAll("#imageDramaContainer .imageDrama");
let dramaCurrentIndex = 0;

function scrollIzquierdaDrama() {
    dramaCurrentIndex = (dramaCurrentIndex - 1 + dramaImages.length) % dramaImages.length;
    updateSlider(document.getElementById('imageDramaContainer'), dramaCurrentIndex);
}

function scrollDerechaDrama() {
    dramaCurrentIndex = (dramaCurrentIndex + 1) % dramaImages.length;
    updateSlider(document.getElementById('imageDramaContainer'), dramaCurrentIndex);
}


const comediaImages = document.querySelectorAll("#imageComediaContainer .imageDrama");
let comediaCurrentIndex = 0;

function scrollIzquierdaComedia() {
    comediaCurrentIndex = (comediaCurrentIndex - 1 + comediaImages.length) % comediaImages.length;
    updateSlider(document.getElementById('imageComediaContainer'), comediaCurrentIndex);
}

function scrollDerechaComedia() {
    comediaCurrentIndex = (comediaCurrentIndex + 1) % comediaImages.length;
    updateSlider(document.getElementById('imageComediaContainer'), comediaCurrentIndex);
}


const animacionImages = document.querySelectorAll("#imageAnimacionContainer .imageDrama");
let animacionCurrentIndex = 0;

function scrollIzquierdaAnimacion() {
    animacionCurrentIndex = (animacionCurrentIndex - 1 + animacionImages.length) % animacionImages.length;
    updateSlider(document.getElementById('imageAnimacionContainer'), animacionCurrentIndex);
}

function scrollDerechaAnimacion() {
    animacionCurrentIndex = (animacionCurrentIndex + 1) % animacionImages.length;
    updateSlider(document.getElementById('imageAnimacionContainer'), animacionCurrentIndex);
}





