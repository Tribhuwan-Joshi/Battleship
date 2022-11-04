import { game, enemyBoard, intialBoard,dragObj } from "../index";

import Ship from "../modules/ship";


// All of the independent helper functions
function getRow(n) {
  return Math.floor(n / 10);
}

// const pixels = document.querySelectorAll(".gameBoard .pixel");

function destroyPlayerShip(pos) {
  if (game.gameRunning()) {
    const playerShips = dragObj.getShipArr();

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
        let nextPix = document.querySelector(
          `.gameBoard [data-id='${pos + 1}']`
        );
        if (nextPix && !nextPix.getAttribute("data-visited")) {
          aiMove(pos + 1);
        } else {
          aiMove();
        }
      } else {
        pixel.classList.add("bg-gray-500");
        game.changePlayer();
      }
    } else {
      destroyPlayerShip((pos = Math.floor(Math.random() * 100)));
    }
  }
}

function aiMove(pos = Math.floor(Math.random() * 100)) {
  

  const wait = [1500, 1000, 1200, 800, 1400];
  let i = Math.floor(Math.random() * 3);

  setTimeout(() => {
    destroyPlayerShip(pos);
  }, wait[i]);
}
function checkAllSink(caller, shipArr) {
  const main = document.querySelector(".main");
  if (shipArr.every((s) => s.isSunk())) {
    
    game.endGame();
    game.declareWinner(caller);
    main.classList.add("blur");
  }
}

function getCol(n) {
  return n % 10;
}
function setDraggable(element, state) {
  element.setAttribute("draggable", state);
}
function changeUI() {
  const pixels = document.querySelectorAll(".gameBoard .pixel");
  pixels.forEach((p) => p.removeEventListener("dragover", dragObj.dragOver));
  pixels.forEach((p) => p.removeEventListener("dragenter", dragObj.dragEnter));

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
    "-ml-4"
  );
  const tip = document.createElement("div");
  const turn = document.createElement("div");
  tip.textContent = "🫵 Destroy enemy fleet to win the match 💪 ";
  tip.classList.add("text-center");

  turn.classList.add("turn", "text-center", "font-semibold");
  turn.textContent = "Your turn";
  tipContainer.append(tip, turn);

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
let carrier = Ship(5);
let batttleship = Ship(4);
let destroyer = Ship(3);
let patrol1 = Ship(2);
let patrol2 = Ship(2);
let shipArr = [carrier, batttleship, destroyer, patrol1, patrol2];

function reCreateShips() {
  carrier = Ship(5);
  batttleship = Ship(4);
  destroyer = Ship(3);
  patrol1 = Ship(2);
  patrol2 = Ship(2);
  shipArr = [carrier, batttleship, destroyer, patrol1, patrol2];
}

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

    let row = getRow(pos);
    let col = getCol(pos);
    let ship = enemyBoard.getArr()[row][col];
    if (ship) {
      pixel.classList.add("bg-red-500");
      ship.hit();
      checkAllSink("You", shipArr);
    } else {
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
function resetUI() {

  const main = document.querySelector(".main");
  const endGameUI = document.querySelector(".endGame");
  // game.setDragAllowed();
  endGameUI.classList.add("hidden");
  main.classList.remove("blur");
  main.textContent = "";
  main.innerHTML = `
  <div class="container col-start-5 row-start-1 col-span-3 flex items-center ">
            <div class="heading text-3xl whitespace-nowrap tracking-wide font-sans -ml-6 ">Deploy your ships !</div>
        </div>

        <div class="btn-container col-start-5 flex-row  col-span-2 flex justify-center items-center gap-4">
            <button
                class="start-btn p-2  font-mono h-[70%]  rounded-md border border-black px-1 active:bg-gray-800  text-xl tracking-wider bg-white text-black hover:bg-gray-600 hover:cursor-pointer  hover:text-white">
                Start</button>
           
            <div class="error-start text-red-700 underline  whitespace-nowrap p-1 bg-white invisible">Deploy all the
                ships.</div>
        </div>

        <div
            class="gameBoard col-span-3 row-start-3 col-start-3 row-span-3 bg-red-50 grid  grid-cols-10 grid-rows-[repeat(10,minmax(0,1fr))]">


        </div>
        <div
            class="player-area area col-start-4 row-start-6 font-semibold whitespace-nowrap tracking-wide -mt-6 hidden ">
            Your Fleet</div>
        <div
            class="enemy-area area col-start-7 row-start-6 font-semibold whitespace-nowrap tracking-wide -mt-6 hidden ">
            Enemy Fleet</div>

  `;
  const gameBoard = document.querySelector(".gameBoard");
  
  intialBoard.resetBoard();
  enemyBoard.resetBoard();
  // refresh drag and drop
  createShipBoard();
  

  reCreateShips();
  generatePixels(gameBoard);
    dragObj.resetShipObject();
  dragObj.addEventListeners();
  game.addEventListeners();
 
}
function createShipBoard() {
  const main = document.querySelector(".main");
  const shipBoard = document.createElement("div");
  shipBoard.classList.add(
    "shipBoard",
    "col-start-6",
    "items-center",
    "row-start-3",
    "row-span-3",
    "col-span-3",
    "grid",
    "grid-cols-10",
    "grid-rows-[repeat(10,minmax(0,1fr))]"
  );
  shipBoard.innerHTML = `<div draggable="true" id="carrier"
                class="carrier hover:shadow-sm cursor-pointer ships w-[99%]  h-[80%]  col-start-1 rounded-sm col-span-5 row-start-3  bg-green-700"
                data-size="5"></div>
            <div draggable="true" id="battleship"
                class="Battleship hover:shadow-sm cursor-pointer ships w-[99%] h-[80%]  col-start-1 rounded-sm col-span-4 row-start-5 bg-green-700"
                data-size="4"></div>
            <div draggable="true" id="destroyer"
                class="Destroyer hover:shadow-sm cursor-pointer ships w-[99%] h-[80%]  col-start-4  rounded-sm col-span-3 row-start-7  bg-yellow-600"
                data-size="3"></div>
            <div draggable="true" id="patrol1"
                class="Patrol ships hover:shadow-sm cursor-pointer w-[99%] h-[80%]  col-start-7 rounded-sm col-span-2 row-start-3 bg-blue-700"
                data-size="2"></div>
            <div draggable="true" id="patrol2"
                class="Patrol hover:shadow-sm cursor-pointer  ships w-[99%] h-[80%] col-start-7 rounded-sm col-span-2 row-start-5  bg-blue-700"
                data-size="2"></div>
            <div class="instruction  tracking-wider text-sm whitespace-nowrap font-mono font-semibold"> You can only
                move the head of the ship</div>
            <div
                class="instruction font-mono row-start-[10] col-start-1 col-span-10 text-sm   font-semibold whitespace-nowrap">
                Invalid drop will restore the ship position</div>`;
  main.appendChild(shipBoard);
}

export {
  resetUI,
  getRow,
  getCol,
  setDraggable,
  changeUI,
  populateEnemyBoard,
  createShipBoard,
  createEnemyBoard,
  generatePixels,
  aiMove,
  reCreateShips
};
