const sliderContainer = document.querySelector('.slider-container');
let sliderIndex = 0;
let sliderInterval;

function startSlider() {
  sliderContainer.style.width = `${sliderContainer.children.length * 100}%`;

  sliderInterval = setInterval(() => {
    sliderIndex++;
    if (sliderIndex >= sliderContainer.children.length) {
      sliderIndex = 0;
    }
    sliderContainer.style.transform = `translateX(-${sliderIndex * 100 / sliderContainer.children.length}%)`;

    updateSuperpuesta(sliderIndex);
  }, 2000);
}

function updateSuperpuesta(index) {
  const superpuestas = document.querySelectorAll('.slider-logo .superpuesta');
  superpuestas.forEach((superpuesta, i) => {
    superpuesta.style.display = i === index ? 'block' : 'none';
  });
}

startSlider();

function updateSlider() {
    const translateValue = -currentIndex * 9.66;
    pelis.style.transform = `translateX(${translateValue}%)`;
    
    updateSuperpuesta(currentIndex);
}


//*

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



