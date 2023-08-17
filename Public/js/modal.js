const modalBtns = document.querySelectorAll('.verTrailer');
const videoContainers = document.querySelectorAll('.video-container');
const closeBtns = document.querySelectorAll('.close');

modalBtns.forEach((verTrailer, index) => {
    verTrailer.addEventListener('click', () => {
        videoContainers[index].classList.add('show');
    });
});

closeBtns.forEach((close, index) => {
    close.addEventListener('click', () => {
        videoContainers[index].classList.remove('show');
    });
});