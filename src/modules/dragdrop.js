import { intialBoard } from "../index.js";
import { getRow, getCol,setDraggable } from "./helper";
import Ship from "./ship.js";
import Game from "./game.js";
let shipCount = 0;
const dragDrop = () => {
  const game = Game();
  const pixels = document.querySelectorAll(".pixel");
  const ships = document.querySelectorAll(".ships");
  let prevpos = null;

  let prevPix = false;
  let prevsize = null;
  let prevId = null;
  let dropped = false;
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", dragStart);
    ship.addEventListener("dragend", dragEnd);
  });
  pixels.forEach((pixel) => {
    pixel.addEventListener("dragenter", dragEnter);
    pixel.addEventListener("dragover", dragOver);
    pixel.addEventListener("dragleave", dragLeave);
    pixel.addEventListener("drop", drop);
  });

  function dragStart(e) {
    if (!(game.gameStart())) {
      
      if (e.target.parentElement.classList.contains("pixel")) {
        dropped = false;
        prevPix = true;

        prevpos = +e.target.parentElement.getAttribute("data-id");
        const row = +getRow(prevpos);
        const col = +getCol(prevpos);
        prevsize = e.target.getAttribute("data-size");
        prevId = e.target.getAttribute("id");
        removeShip(prevpos, prevsize);
        removeShipArr(row, col, prevsize);
      
      }
      
    
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => e.target.classList.add("hidden"), 0);
    
    }
  }
  function removeShip(pos, size) {
    for (let i = 1; i < size; i++) {
      document.querySelector(`[data-id='${pos + i}']`).textContent = "";
    }
  }
  function removeShipArr(row, col, size) {
    for (let i = 0; i < size; i++) {
      intialBoard.setArr(row, col + i, 0);
    }
  }

  function dragEnd(e) {
    if (!dropped && prevPix) {
      
      const shipElement = document.getElementById(prevId);
const ship = Ship(prevsize);
const row = getRow(prevpos);
const col = getCol(prevpos);
for (let i = 0; i < prevsize; i++) {
  intialBoard.setArr(row, col + i, ship);
}
      appendShip(prevpos, prevsize, shipElement);
      shipCount++;
      
      dropped = true;

    }
    e.target.classList.remove("hidden");
  }

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove("drag-over");
  }
  function drop(e) {
    const id = e.dataTransfer.getData("text/plain");
  
    const shipElement = document.getElementById(id);
    if (shipElement) {
      if (e.target.classList.contains("pixel")) {
        e.preventDefault();
        e.target.classList.remove("drag-over");
        const pos = +e.target.getAttribute("data-id");
        const row = getRow(pos);
        const col = getCol(pos);
        // get ship size

        const shipSize = document.getElementById(id).getAttribute("data-size");

        if (intialBoard.canDeploy(shipSize, row, col)) {
          const ship = Ship(shipSize);

          for (let i = 0; i < shipSize; i++) {
            intialBoard.setArr(row, col + i, ship);
          }
          dropped = true;
        
          appendShip(pos, shipSize, shipElement);
          shipCount++;
        
        } else {
        
          shipElement.classList.remove("hidden");
          e.target.classList.remove("drag-over");
        }
      } else {
      
        shipElement.classList.remove("hidden");
        
      }
    }
    e.target.classList.remove("drag-over");  // remove the drag-over shadow
  }

  function appendShip(pos, shipSize, shipElement) {
    document.querySelector(`[data-id='${pos}']`).append(shipElement);
    shipElement.classList.remove("hidden");
    for (let i = 1; i < shipSize; i++) {
      const shipClone = shipElement.cloneNode(true);
      document.querySelector(`[data-id='${pos + i}']`).append(shipClone);
      shipClone.classList.remove("hidden");
      setDraggable(shipClone, false);
      // shipClone.setAttribute("draggable", false);
    }
    console.log(intialBoard.getArr())
  }
 
};
 function allDeploy() {
   return shipCount == 5;
 }

export { allDeploy , dragDrop};