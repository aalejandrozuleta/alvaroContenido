function buscarPeliculas() {
    const input = document.getElementsByClassName(".seeker");
    const searchText = input.value.toLowerCase();
    const peliculas = document.querySelectorAll(".imageDrama h3");
    const peliculasUnicas = new Set();
    peliculas.forEach((pelicula) => {
        const titulo = pelicula.textContent.toLowerCase();
        if (titulo.includes(searchText)) {
            const figura = pelicula.closest(".imageDrama");
            peliculasUnicas.add(figura.outerHTML);
        }
    });
    const peliculasHTML = Array.from(peliculasUnicas).join("");
    
    if (peliculasHTML) {
        abrirModal(peliculasHTML);
    }
}




function abrirModal(peliculasHTML) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");

    modal.style.display = "block";
    modalContent.innerHTML = peliculasHTML;
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

