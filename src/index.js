import "./style.css";
import { dragDrop } from "./modules/dragdrop";
import GameBoard from "./modules/gameBoard";
import { generatePixels } from "./modules/helper";
import Game from "./modules/game";
import iconImg from "./assets/iconShip.png";
import warIcon from "./assets/war.png";
import miyamoto from "./assets/miyamoto.jpg";
import { createShipBoard } from "./modules/helper";
function init() {
  // initialize overhead rendering

  const icon = document.querySelector("link[rel=icon]");
  icon.href = iconImg;
  const pfp = document.querySelector("img.pfp");
  pfp.src = miyamoto;
  const war = document.querySelectorAll("img.warIcon");
  war.forEach((e) => (e.src = warIcon));

  // game board
  const gameBoard = document.querySelector(".gameBoard");
  generatePixels(gameBoard);
  createShipBoard();
}

init();
let intialBoard = GameBoard();
let enemyBoard = GameBoard();
let dragObj = dragDrop();
dragObj.addEventListeners();
let game = Game();
game.addEventListeners();

export { intialBoard, enemyBoard, game,dragObj };
