import { intialBoard, game } from "../index.js";
import { getRow, getCol, setDraggable } from "./helper";
import Ship from "./ship.js";

const dragDrop = () => {
  let pixels = document.querySelectorAll(".pixel");
  let ships = document.querySelectorAll(".ships");
  let prevpos = null;
  let prevPix = false;
  let prevsize = null;
  let prevId = null;
  let dropped = false;
  let shipArrObject = {};
  let shipArr = [];
  function resetShipObject() {
    shipArr = [];
    shipArrObject = {};
    prevpos = null;
    prevPix = false;
    prevsize = null;
    prevId = null;
    dropped = false;
    shipArrObject = {};
    shipArr = [];
    pixels = document.querySelectorAll(".pixel");
    ships = document.querySelectorAll(".ships");
  }
  function addEventListeners() {
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
  }

  function dragStart(e) {
    if (game.isDragAllowed()) {
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

      dropped = true;
    }
    e.target.classList.remove("hidden");
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
          if (!(id in shipArrObject)) {
            shipArrObject[id] = ship;
            shipArr.push(ship);
          }
          dropped = true;

          appendShip(pos, shipSize, shipElement);
        } else {
          shipElement.classList.remove("hidden");
          e.target.classList.remove("drag-over");
        }
      } else {
        shipElement.classList.remove("hidden");
      }
    }
    e.target.classList.remove("drag-over"); // remove the drag-over shadow
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
  }
  function allDeploy() {
    const shipBoard = document.querySelector(".shipBoard").children;
    for (let i of shipBoard) {
      if (i.classList.contains("ships")) return false;
    }
    return true;
  }
  function getShipArr() {
    return shipArr;
  }
  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  return {
    resetShipObject,
    allDeploy,
    dragEnter,
    dragOver,
    getShipArr,
    addEventListeners,
  };
};

export { dragDrop };
