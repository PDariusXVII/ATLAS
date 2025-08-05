// Função de pesquisa
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const filter = searchInput.value.toLowerCase(); // Obtém o texto digitado e coloca tudo em minúsculo
    const containers = document.querySelectorAll(".container"); // Seleciona todos os containers de livros

    containers.forEach(function(container) {
        // Obtém o texto do autor e do livro, se existir
        const autorText = container.querySelector(".autor") ? container.querySelector(".autor").textContent.toLowerCase() : "";
        const livrosText = container.querySelector(".livros") ? container.querySelector(".livros").textContent.toLowerCase() : "";

        // Verifica se o filtro corresponde ao autor ou ao livro
        if (autorText.includes(filter) || livrosText.includes(filter)) {
            container.classList.remove("hidden"); // Exibe o container se corresponder ao filtro
        } else {
            container.classList.add("hidden"); // Esconde o container se não corresponder
        }
    });
});
