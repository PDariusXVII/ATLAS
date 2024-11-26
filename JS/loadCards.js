// loadCards.js

// Seleciona o container na página de destino
const livrosContainer = document.getElementById("livros-container");

// Função para carregar o conteúdo da página "livros.html"
fetch('/PÁGINAS/livros.html')
  .then(response => {
    if (!response.ok) throw new Error('Erro ao carregar os livros.');
    return response.text();
  })
  .then(html => {
    // Cria um elemento temporário para manipular o conteúdo carregado
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Extrai apenas os cards do "livros.html"
    const cards = tempDiv.querySelectorAll('#livros-container .card');
    cards.forEach(card => {
      livrosContainer.appendChild(card.cloneNode(true)); // Clona e insere os cards
    });
  })
  .catch(error => console.error('Erro:', error));

  fetch('/PÁGINAS/livros.json')
  .then(response => response.json())
  .then(livros => {
    livros.forEach(livro => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2 class="title">${livro.titulo}</h2>
        <p class="author">Autor: ${livro.autor}</p>
      `;
      document.getElementById('livros-container').appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar livros:', error));


  