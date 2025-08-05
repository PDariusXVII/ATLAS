function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

window.addEventListener('resize', updateDimensions); 
document.addEventListener('DOMContentLoaded', updateDimensions);



  // Verifica se o usuário está autenticado
  window.onload = function() {
    // Checa se a chave de autenticação existe no localStorage (ou sessionStorage)
    if (localStorage.getItem('userLoggedIn') === 'true') {
      // Esconde o botão de login
      document.getElementById('loginButton').style.display = 'none';
    }
  };

  // Função de login (simulação de login)
  function login() {
    // Após o login bem-sucedido, define a chave de autenticação
    localStorage.setItem('userLoggedIn', 'true');
    
    // Redireciona para a página principal ou outra página após o login
    window.location.href = '../PÁGINAS/Dashboard.html';  // Substitua pelo caminho real
  }
