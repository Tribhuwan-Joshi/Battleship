import { allDeploy, dragOver, dragEnter } from "./dragdrop";
import { enemyBoard, game, intialBoard } from "../index";
import {
  createEnemyBoard,
  changeUI,
  createShipBoard,
  populateEnemyBoard,
  aiMove,
  resetUI
} from "./helper";
import GameBoard from "./gameBoard";
const Game = () => {
  let gameState = false;
  let dragAllowed = true;
  let currentPlayer;
  const startBtn = document.querySelector(".start-btn");
  const resetBtn = document.querySelector("button.restart");
  const playerArea = document.querySelector(".player-area");
  const enemyArea = document.querySelector(".enemy-area");

  startBtn.addEventListener("click", startGame);
  resetBtn.addEventListener("click", resetGame);
  function gameRunning() {
    return gameState;
  }
  
  function isDragAllowed() {
    return dragAllowed;
  }
  function endGame() {
    gameState = false;
  }
  function getCurrentPlayer() {
    return currentPlayer;
  }
  function resetGame() {
    resetUI();
    createShipBoard();
    enemyBoard.resetBoard();
    intialBoard.resetBoard();

  }
  function changePlayer() {
    const turn = document.querySelector(".turn");
    if (currentPlayer == "p1") {
      currentPlayer = "a1";
      turn.textContent = "AI turn";
      playerArea.classList.remove("underline");
      enemyArea.classList.add("underline");
      aiMove();
    } else {
      currentPlayer = "p1";
      turn.textContent = "Your turn";
      playerArea.classList.add("underline");
      enemyArea.classList.remove("underline");
    }
  }
  function declareWinner(winner) {
    const endGame = document.querySelector(".endGame");
    const winnerContainer = document.querySelector(".endGame .winner");
    endGame.classList.remove("hidden");
    endGame.classList.add("flex");
    winnerContainer.textContent = `${winner} Win`;
  }

  function setDragAllowed() {
    dragAllowed = true;
}

  function startGame() {
    const errorMessage = document.querySelector(".error-start");

    if (allDeploy()) {
      currentPlayer = "p1";
      playerArea.classList.add("underline");
      console.log(enemyBoard.getArr());
      dragAllowed = false;
      changeUI();
      gameState = true;
      const shipBoard = document.querySelector(".shipBoard");
      shipBoard.classList.add("hidden");
      shipBoard.classList.remove("grid");
      startBtn.classList.add("hidden");
      createEnemyBoard();
      populateEnemyBoard();

      errorMessage.classList.add("invisible");

      playerArea.classList.add("underline");
      // while (gameRunning()) {
      //   let currentPlayer = getCurrentPlayer();
      //   if (currentPlayer == "a1") {
      //     aiMove();
      //     changePlayer();
      //   }
      // }
    } else {
      errorMessage.classList.remove("invisible");
    }
   
  }
  return {
    gameRunning,
    getCurrentPlayer,
    changePlayer,
    endGame,
    isDragAllowed,
    setDragAllowed,
    declareWinner,
  };
};

export default Game;
