const bala = document.querySelector(".bala-game");

const loopGame = setInterval(() => { 
  mario.classList.remove("jump-mario");

  setTimeout(() => {
    mario.classList.remove(jump-mario");
  },500);
  //const balaPosition = bala.offsetLeft;
  //const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
 
  if (balaPosition <= 120 && balaPosition > 0 && marioPosition < 180) {
    bala.style.animation = "none";
    bala.style.left = `${balaPosition}px`;
 
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
  

}, 10); 

