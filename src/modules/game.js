import { enemyBoard, intialBoard,dragObj } from "../index";
import {
  createEnemyBoard,
  changeUI,
  populateEnemyBoard,
  aiMove,
  resetUI,
} from "./helper";
// import GameBoard from "./gameBoard";
const Game = () => {
  let gameState = false;
  let dragAllowed = true;
  let currentPlayer;
  let startBtn = document.querySelector(".start-btn");
  let resetBtn = document.querySelector("button.restart");
  let playerArea = document.querySelector(".player-area");
  let enemyArea = document.querySelector(".enemy-area");
   startBtn.addEventListener("click", startGame);
   resetBtn.addEventListener("click", resetGame);

  startBtn.addEventListener("click", startGame);
  resetBtn.addEventListener("click", resetGame);
  function addEventListeners() {
     startBtn = document.querySelector(".start-btn");
     resetBtn = document.querySelector("button.restart");
     playerArea = document.querySelector(".player-area");
     enemyArea = document.querySelector(".enemy-area");

     startBtn.addEventListener("click", startGame);
     resetBtn.addEventListener("click", resetGame);
  }

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
    enemyBoard.resetBoard();
    intialBoard.resetBoard();
    gameState = false;
    dragAllowed = true;
    currentPlayer = "";
        resetUI();
    
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

    if (dragObj.allDeploy()) {
      currentPlayer = "p1";
      playerArea.classList.add("underline");
      
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
    addEventListeners
  };
};

export default Game;
