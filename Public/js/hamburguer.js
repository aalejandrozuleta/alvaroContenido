const btnBurguer = document.getElementById('btnBurguer');
const navBurguer = document.getElementById('navBurguer');
const hamburguesaActive = document.getElementById('hamburguesa');
const imgX = document.getElementById('imgClose');
const imgHamburguesa = document.getElementById('imgHamburguesa');

btnBurguer.addEventListener('click', () => {
    navBurguer.classList.toggle('navBurguerActive');
    hamburguesaActive.classList.toggle('hamburguesaActive'); 
    imgX.classList.toggle('imgXActive');
    imgHamburguesa.classList.toggle('imgHamburguesaActive');
});