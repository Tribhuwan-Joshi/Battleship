import { allDeploy, dragOver, dragEnter } from "./dragdrop";
import { enemyBoard, game, intialBoard } from "../index";
import {
  createEnemyBoard,
  hideEnemyPixels,
  changeUI,
  populateEnemyBoard,
  aiMove
} from "./helper";
const Game = () => {
  let gameState = false;
  let dragAllowed = true;
  let currentPlayer;
  const startBtn = document.querySelector(".start-btn");
  const resetBtn = document.querySelector("button.restart");
  const playerArea = document.querySelector(".player-area");
  const enemyArea = document.querySelector(".enemy-area");

  startBtn.addEventListener("click", startGame);
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
      hideEnemyPixels();
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
    console.log("run")
  }
  return {
    gameRunning,
    getCurrentPlayer,
    changePlayer,
    endGame,
    isDragAllowed,
    declareWinner,
  };
};

export default Game;
