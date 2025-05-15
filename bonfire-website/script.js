const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
  const transition = document.createElement('div');
  transition.classList.add('transition-screen');
  document.body.appendChild(transition);

  // Ativa a animação de transição
  setTimeout(() => {
    transition.classList.add('active');
  }, 10);

  // Após a animação, redireciona ou carrega o conteúdo
  setTimeout(() => {
    // Aqui você pode redirecionar ou carregar nova seção
    window.location.href = "game.html"; // ou carregar algo novo
  }, 1200);
});
