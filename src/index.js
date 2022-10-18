import "./style.css";
import dragDrop from "./modules/dragdrop"
import GameBoard from "./modules/gameBoard";

import iconImg from "./assets/iconShip.png";
import warIcon from "./assets/war.png";
import miyamoto from "./assets/miyamoto.jpg";


function init() {  // initialize overhead rendering

  const icon = document.querySelector("link[rel=icon]");
  icon.href = iconImg;
  const pfp = document.querySelector("img.pfp");
  pfp.src = miyamoto;
  const war = document.querySelectorAll("img.warIcon");
  war.forEach((e) => (e.src = warIcon));
  // game board
  const gameBoard = document.querySelector(".gameBoard");
  let n = 0;
  while (n!=100) {
    const pixel = document.createElement("div");
    pixel.classList.add("border", "border-black","pixel","flex","items-center");
    gameBoard.appendChild(pixel);
    pixel.setAttribute("data-id", n);
    n++;
  }
}

init();
let intialBoard = GameBoard();
dragDrop();



export default intialBoard;
