function startGame() {
    document.body.classList.add("shrink-frame");
  
    const transition = document.createElement("div");
    transition.classList.add("transition-screen");
    document.body.appendChild(transition);
  
    setTimeout(() => transition.classList.add("active"), 10);
    setTimeout(() => (window.location.href = "game.html"), 1200);
  }
  