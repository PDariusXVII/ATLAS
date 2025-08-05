// Função para atualizar a contagem de álbuns e de outras categorias recuperadas do localStorage
function updateCategoryCounts() {
  // Definir as chaves de cada categoria
  const categories = [
    'album', 'animation', 'buttons', 'cards', 'containers', 'cursor', 'footer', 'forms', 'inputfield', 'input', 'loaders', 'menu', 'navbar', 'tema', 'text'
  ];

  // Variável para armazenar o total de itens
  let totalItems = 0;

  // Para cada categoria, recupera a contagem do localStorage, atualiza o valor no HTML e soma ao total
  categories.forEach(category => {
    const count = parseInt(localStorage.getItem(`${category}-count`)) || 0;
    totalItems += count;

    // Atualiza o valor no HTML
    document.getElementById(`${category}-count`).innerText = count;
  });

  // Atualiza o valor total de itens no HTML
  document.getElementById('all-count').innerText = totalItems;
}

// Executa a atualização das contagens ao carregar a página
document.addEventListener("DOMContentLoaded", updateCategoryCounts);



// Função para atualizar a contagem de álbuns e de outras categorias recuperada do localStorage
function updateCategoryCounts() {
  // Recupera a contagem de cada categoria armazenada no localStorage
  const albumCount = parseInt(localStorage.getItem('album-count')) || 0;
  const animationCount = parseInt(localStorage.getItem('animation-count')) || 0;
  const buttonsCount = parseInt(localStorage.getItem('buttons-count')) || 0;
  const cardsCount = parseInt(localStorage.getItem('cards-count')) || 0;
  const containersCount = parseInt(localStorage.getItem('containers-count')) || 0;
  const cursorCount = parseInt(localStorage.getItem('cursor-count')) || 0;
  const footerCount = parseInt(localStorage.getItem('footer-count')) || 0;
  const formsCount = parseInt(localStorage.getItem('forms-count')) || 0;
  const inputfieldCount = parseInt(localStorage.getItem('inputfield-count')) || 0;
  const inputCount = parseInt(localStorage.getItem('input-count')) || 0;
  const loadersCount = parseInt(localStorage.getItem('loaders-count')) || 0;
  const menuCount = parseInt(localStorage.getItem('menu-count')) || 0;
  const navbarCount = parseInt(localStorage.getItem('navbar-count')) || 0;
  const temaCount = parseInt(localStorage.getItem('tema-count')) || 0;
  const textrCount = parseInt(localStorage.getItem('textr-count')) || 0;


  // Atualiza os valores no HTML
  document.getElementById('album-count').innerText = albumCount;
  document.getElementById('animation-count').innerText = animationCount;
  document.getElementById('buttons-count').innerText = buttonsCount;
  document.getElementById('cards-count').innerText = cardsCount;
  document.getElementById('containers-count').innerText = containersCount;
  document.getElementById('cursor-count').innerText = cursorCount;
  document.getElementById('footer-count').innerText = footerCount;
  document.getElementById('forms-count').innerText = formsCount;
  document.getElementById('inputfield-count').innerText = inputfieldCount;
  document.getElementById('input-count').innerText = inputCount;
  document.getElementById('loaders-count').innerText = loadersCount;
  document.getElementById('menu-count').innerText = menuCount;
  document.getElementById('navbar-count').innerText = navbarCount;
  document.getElementById('tema-count').innerText = temaCount;
  document.getElementById('text-count').innerText = textCount;

  // Soma total de itens de todas as categorias
  let totalItems = albumCount + animationCount + buttonsCount + cardsCount + containersCount + cursorCount + footerCount + formsCount + inputfieldCount + inputCount + menuCount + navbarCount + temaCount + textCount;
  document.getElementById('all-count').innerText = totalItems;
}

// Executa a atualização das contagens ao carregar a página
document.addEventListener("DOMContentLoaded", updateCategoryCounts);

// Função para atualizar a contagem de categorias recuperadas do localStorage
function updateCategoryCounts() {
// Definir as chaves de cada categoria
const categories = [
'album', 'animation', 'buttons', 'cards', 'containers', 'cursor', 'footer', 'forms', 'inputfield', 'input', 'loaders', 'menu', 'navbar', 'tema', 'text'
];

// Variável para armazenar o total de itens
let totalItems = 0;

// Para cada categoria, recupera a contagem do localStorage, atualiza o valor no HTML e soma ao total
categories.forEach(category => {
const count = parseInt(localStorage.getItem(`${category}-count`)) || 0;
totalItems += count;

// Atualiza o valor no HTML
document.getElementById(`${category}-count`).innerText = count;
});

// Atualiza o valor total de itens no HTML
document.getElementById('all-count').innerText = totalItems;
}

// Executa a atualização das contagens ao carregar a página
document.addEventListener("DOMContentLoaded", updateCategoryCounts);

