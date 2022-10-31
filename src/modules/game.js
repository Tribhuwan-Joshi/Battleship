import { allDeploy } from "./dragdrop";
import { intialBoard } from "../index";
import { setDraggable, changeUI } from "./helper";
const Game = () => {
  let gameState = false;
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", startGame);
  function gameStart() {
    return gameState;
  }
  function startGame() {
    const errorMessage = document.querySelector(".error-start");
    if (allDeploy()) {
      changeUI();
      gameState = true;


      const main = document.querySelector(".main");
      const shipBoard = document.querySelector(".shipBoard");
      shipBoard.classList.add("hidden");
      shipBoard.classList.remove("grid");
      startBtn.classList.add("hidden");
      const aiBoard = document.createElement("div");

      aiBoard.classList.add(
        "aiBoard",
        "col-start-6",
        "row-start-3",
        "row-span-3",
        "col-span-3",
        "grid",
        "grid-cols-10",
        "bg-red-50",
        "grid-rows-[repeat(10,minmax(0,1fr))]"
      );
      let n = 0;
      while (n != 100) {
        const pixel = document.createElement("div");
        pixel.classList.add(
          "border",
          "border-black",
          "pixel",
          "flex",
          "items-center"
        );
        aiBoard.appendChild(pixel);
        pixel.setAttribute("data-id", n);
        n++;
      }
      main.appendChild(aiBoard);
    } else {
      errorMessage.classList.remove("invisible");
    }
  }
  return { gameStart };
};

export default Game;
