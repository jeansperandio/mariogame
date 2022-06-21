const bala = document.querySelector(".bala-game");

const loopGame = setInterval(() => { 
  const balaPosition = b1.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
 
  if (balaPosition <= 00 && balaPosition > 0 && marioPosition < 180) {
    b1.style.animation = "none";
    b1.style.left = `${b1Position}px`;
 
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
  

}, 10); 

