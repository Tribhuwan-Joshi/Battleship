import { dragEnter, dragOver, getShipArr } from "./dragdrop";
import { game, enemyBoard, intialBoard } from "../index";
import Ship from "../modules/ship";

// All of the independent helper functions
function getRow(n) {
  return Math.floor(n / 10);
}


// const pixels = document.querySelectorAll(".gameBoard .pixel");

function destroyPlayerShip() {
  if (game.gameRunning()) {
    const playerShips = getShipArr();
    let pos = Math.floor(Math.random() * 100);
    console.log(pos);
    let pixel = document.querySelector(`.gameBoard [data-id='${pos}']`);
    let row = getRow(pos);
    let col = getCol(pos);
    if (!pixel.getAttribute("data-visited")) {
      pixel.setAttribute("data-visited", true);
      let ship = intialBoard.getArr()[row][col];
      if (ship) {
        ship.hit();
        pixel.textContent = "";
        pixel.classList.add("bg-red-500");
        checkAllSink("AI", playerShips);
        aiMove();
      }
      else {
        pixel.classList.add("bg-gray-500");
        game.changePlayer();
      }
      
    } else {
   
      destroyPlayerShip();
    }
  }
}
function checkAllSink(caller, shipArr) {
    const main = document.querySelector(".main");
  if (shipArr.every((s) => s.isSunk())) {
        console.log("all Sink");
        game.endGame();
        game.declareWinner(caller);
        main.classList.add("blur");
      }
    
  
}
function aiMove() {
  const wait = [900, 1000, 1200, 800,1400];
  let i = Math.floor(Math.random() * 3);

  setTimeout(() => {
    destroyPlayerShip();
  }, wait[i]);
}
function getCol(n) {
  return n % 10;
}
function setDraggable(element, state) {
  element.setAttribute("draggable", state);
}
function changeUI() {
  const pixels = document.querySelectorAll(".gameBoard .pixel");
  pixels.forEach((p) => p.removeEventListener("dragover", dragOver));
  pixels.forEach((p) => p.removeEventListener("dragenter", dragEnter));

  const ships = document.querySelectorAll(".gameBoard .ships");
  ships.forEach((s) => setDraggable(s, false));
  const main = document.querySelector(".main");
  const heading = document.querySelector(".heading");
  heading.textContent = "Attack enemy ships !";
  const areas = document.querySelectorAll(".area");
  areas.forEach((area) => {
    area.classList.remove("hidden");
  });
  const tipContainer = document.createElement("div");
  tipContainer.classList.add(
    "col-start-4",
    "col-span-4",
    "text-lg",
    "row-start-2",
    "flex-col",
    "gap-2",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "tracking-wide",
    "-ml-4",
    
  );
  const tip = document.createElement("div");
  const turn = document.createElement("div");
  tip.textContent =
    "🫵 Destroy enemy fleet to win the match 💪 ";
  tip.classList.add("text-center")
 
  turn.classList.add("turn", "text-center","font-semibold");
  turn.textContent = "Your turn";
  tipContainer.append(tip,turn);
  


  main.appendChild(tipContainer);
}

function createEnemyBoard() {
  const main = document.querySelector(".main");
  const enemyBoard = document.createElement("div");
  enemyBoard.classList.add(
    "enemyBoard",
    "col-start-6",
    "row-start-3",
    "row-span-3",
    "col-span-3",
    "grid",
    "grid-cols-10",
    "bg-red-50",
    "grid-rows-[repeat(10,minmax(0,1fr))]"
  );
  generatePixels(enemyBoard);
  main.appendChild(enemyBoard);
  const pixels = document.querySelectorAll(".enemyBoard .pixel");
  pixels.forEach((p) => {
    p.classList.add("bg-gray-500");
    p.addEventListener("click", (e) => disclosePixel(e));
  });
}
const carrier = Ship(5);
const batttleship = Ship(4);
const destroyer = Ship(3);
const patrol1 = Ship(2);
const patrol2 = Ship(2);
const shipArr = [carrier, batttleship, destroyer, patrol1, patrol2];

function disclosePixel(e) {

  let pixel = e.target;
  if (
    game.getCurrentPlayer() == "p1" &&
    !pixel.getAttribute("data-visited") &&
    game.gameRunning()
  ) {
    let pos = e.target.getAttribute("data-id");

    pixel.classList.remove("bg-gray-500");
    pixel.setAttribute("data-visited", true);
    // console.log(pixel);
    // pixel.style.backgroundColor = "red";

    let row = getRow(pos);
    let col = getCol(pos);
    let ship = enemyBoard.getArr()[row][col];
    if (ship) {
      pixel.classList.add("bg-red-500");
      ship.hit();
      checkAllSink("You", shipArr);
     
    }
    else {
      game.changePlayer();
    }
  }
}

function generatePixels(element) {
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
    element.appendChild(pixel);
    pixel.setAttribute("data-id", n);
    n++;
  }
}

function populateEnemyBoard() {
  console.log("called");
  let enemyShipCount = 0;
  while (enemyShipCount < 5) {
    let pos = Math.floor(Math.random() * 100);
    let row = getRow(pos);
    let col = getCol(pos);
    let size = shipArr[enemyShipCount].length;
    if (enemyBoard.canDeploy(size, row, col)) {
      for (let i = 0; i < size; i++) {
        enemyBoard.setArr(row, col + i, shipArr[enemyShipCount]);
      }
      enemyShipCount++;
    }
  }
}
function hideEnemyPixels() {}

export {
  getRow,
  getCol,
  setDraggable,
  changeUI,
  populateEnemyBoard,
  hideEnemyPixels,
  createEnemyBoard,
  generatePixels,
  aiMove,
};
