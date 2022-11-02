import { dragEnter, dragOver } from "./dragdrop";
import { game,enemyBoard } from "../index";
import Ship from "../modules/ship";
// All of the independent helper functions
function getRow(n) {
  return Math.floor(n / 10);
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
    "flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "tracking-wide",
    "-ml-8",
    "font-semibold"
  );
  const tip = document.createElement("div");
  tip.textContent =
    "⚔️ Destroy all of the  ships before the enemy to win the match ⚔️ ";
  tipContainer.appendChild(tip);

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
    p.addEventListener("click",(e)=>disclosePixel(e));
  });

 
}

function disclosePixel(e) {
  if (game.getTurn() == "player") {
    let pos = e.target.getAttribute("data-id");
    let pixel = e.target;
    pixel.classList.remove("bg-gray-500");
        // console.log(pixel);
    // pixel.style.backgroundColor = "red";

    let row = getRow(pos);
    let col = getCol(pos);
    console.log(enemyBoard.getArr()[row][col]);
    if (enemyBoard.getArr()[row][col]) {
      pixel.classList.add("bg-red-700");
      
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
  const carrier = Ship(5);
  const batttleship = Ship(4);
  const destroyer = Ship(3);
  const patrol1 = Ship(2);
  const patrol2 = Ship(2);
  const shipArr = [carrier, batttleship, destroyer, patrol1, patrol2];
  let enemyShipCount = 0;
  while (enemyShipCount <5) {
  
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
};
