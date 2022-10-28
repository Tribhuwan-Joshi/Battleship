import { allDeploy } from "./dragdrop";
import intialBoard from "../index";

const Game = () => {
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", startGame);
    const gameBoard = document.querySelector(".gameBoard");
    // console.log(gameBoard);
  function startGame() {
    const errorMessage = document.querySelector(".error-start");
    if (allDeploy()) {
      errorMessage.classList.add("invisible");
      const main = document.querySelector(".main");
      const shipBoard = document.querySelector(".shipBoard");
      shipBoard.classList.add("hidden");
        shipBoard.classList.remove("grid");
        startBtn.classList.add("hidden");
        const aiBoard = gameBoard.cloneNode(true);
        console.log(aiBoard)
      aiBoard.classList.remove(
        "gameBoard",
        "col-span-3",
        "row-start-3",
        "col-start-3",
        "row-span-3"
      );
      aiBoard.classList.add(
        "aiBoard",
        "col-start-6",
        "row-start-3",
        "row-span-3",
        "col-span-3"
      );
      main.appendChild(aiBoard);
      console.log("started with arr ", intialBoard.getArr());
    } else {
      errorMessage.classList.remove("invisible");
      console.log("not started");
    }
  }
};

export default Game;
