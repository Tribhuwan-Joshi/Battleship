import { allDeploy, dragOver, dragEnter } from "./dragdrop";
import { enemyBoard, intialBoard } from "../index";
import {
  createEnemyBoard,
  hideEnemyPixels,
  changeUI,
  populateEnemyBoard,
} from "./helper";
const Game = () => {
  let gameState = false;
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", startGame);
  function gameStart() {
    return gameState;
  }
  let currentTurn = "player";
  function getTurn() {
    return currentTurn;
  }
  function changeTurn() {
    if (currentTurn == "player") {
      currentTurn = "enemy";
    } else {
      currentTurn = "player";
    }
  }
  function startGame() {
    const errorMessage = document.querySelector(".error-start");
    if (allDeploy()) {
      changeUI();
      gameState = true;
      const shipBoard = document.querySelector(".shipBoard");
      shipBoard.classList.add("hidden");
      shipBoard.classList.remove("grid");
      startBtn.classList.add("hidden");
      createEnemyBoard();
      populateEnemyBoard();
      hideEnemyPixels();
      errorMessage.classList.add("invisible");
      let gameEnd = false;
      currentTurn = "player";
      const playerArea = document.querySelector(".player-area");
      const enemyArea = document.querySelector(".enemy-area");
      playerArea.classList.add("underline");
      // while (!gameEnd) {
      //   if (currentTurn == "player") {

      //   }
      // }
    } else {
      errorMessage.classList.remove("invisible");
    }
  }
  return { gameStart, getTurn, changeTurn };
};

export default Game;
