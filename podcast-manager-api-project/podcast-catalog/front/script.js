let isPlaying = false;


/* =========================
   PLAYER
========================= */

function playPodcast(title) {

    const player = document.getElementById("player");
    const playerTitle = document.getElementById("playerTitle");
    const mainPlay = document.getElementById("mainPlay");

    playerTitle.textContent = title;

    player.classList.add("active");

    isPlaying = true;

    mainPlay.textContent = "Ⅱ";
}


function togglePlay() {

    const mainPlay = document.getElementById("mainPlay");

    if (!document.getElementById("playerTitle").textContent ||
        document.getElementById("playerTitle").textContent === "Nenhum episódio") {

        return;
    }

    isPlaying = !isPlaying;

    mainPlay.textContent = isPlaying ? "Ⅱ" : "▶";

}


/* =========================
   FAVORITOS
========================= */

document.querySelectorAll(".favorite").forEach(button => {

    button.addEventListener("click", () => {

        const active =
            button.classList.toggle("liked");

        button.textContent =
            active ? "♥" : "♡";

    });

});


/* =========================
   CATEGORIAS
========================= */

document.querySelectorAll(".category").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".category")
            .forEach(item =>
                item.classList.remove("active")
            );

        button.classList.add("active");

    });

});


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", () => {

    const query =
        searchInput.value.toLowerCase().trim();


    document
        .querySelectorAll(".podcast-card")
        .forEach(card => {

            const title =
                card.dataset.title.toLowerCase();

            if (title.includes(query)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

});


/* =========================
   NAVIGATION
========================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        document
            .querySelectorAll(".nav-link")
            .forEach(item =>
                item.classList.remove("active")
            );

        link.classList.add("active");

    });

});


/* =========================
   MODAL
========================= */

function openModal() {

    document
        .getElementById("modal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


document
    .getElementById("modal")
    .addEventListener("click", event => {

        if (event.target.id === "modal") {

            closeModal();

        }

    });


/* =========================
   SIMULAÇÃO DO BACKEND
========================= */

/*
    Quando conectar ao backend,
    você poderá substituir os dados
    mockados por algo como:

    fetch("http://localhost:8080/api/podcasts")
        .then(response => response.json())
        .then(data => {
            renderPodcasts(data);
        });
*/


async function loadPodcasts() {

    try {

        /*
        const response = await fetch(
            "http://localhost:8080/api/podcasts"
        );

        const podcasts = await response.json();

        renderPodcasts(podcasts);
        */

        console.log(
            "Frontend pronto para integração com API."
        );

    } catch (error) {

        console.error(
            "Erro ao carregar podcasts:",
            error
        );

    }

}


loadPodcasts();