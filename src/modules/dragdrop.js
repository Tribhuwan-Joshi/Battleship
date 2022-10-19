import intialBoard from "../index.js";
import { getRow, getCol } from "./helper.js";

const dragDrop = () => {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((s) => s.addEventListener("dragstart", dragStart));
  ships.forEach((s) => s.addEventListener("dragend", dragEnd));

  const pixels = document.querySelectorAll(".gameBoard .pixel");
  pixels.forEach((p) => {
    p.addEventListener("dragenter", dragEnter);
    p.addEventListener("dragover", dragOver);
    p.addEventListener("dragleave", dragLeave);
    p.addEventListener("drop", drop);
  });

  function dragEnd(e) {
    e.target.classList.remove("hidden");
  }
  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    if (e.target.classList.contains("pixel")) {
      const size = draggable.getAttribute("data-size");
      const dataID = e.target.getAttribute("data-id");

      const col = getCol(dataID);
        const row = getRow(dataID);
        // console.log(intialBoard.isValidpos(size, col));
      if (
        intialBoard.isClearPos(size, row, col) &&
        intialBoard.isValidpos(size, col)
      ) {
          e.target.append(draggable);
          draggable.classList.remove("hidden");
          for (let i = 1; i < size; i++) {
            let ele =document.querySelector(`[data-id='${+(+dataID + i)}']`)
              const node = draggable.cloneNode(true);
              node.setAttribute("draggable", "false");
            ele.append(node);
              ele.classList.remove("drag-over");
              draggable.classList.remove("hidden");
            
        }

        
        }
        
      }
      e.target.classList.remove("drag-over");
  }
  function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      const size = e.target.getAttribute("data-size");
    //   console.log(e.target.parentElement);
      if (e.target.parentElement.classList.contains("pixel")) {
          const pos = e.target.parentElement.getAttribute("data-id");
          const row = getRow(pos);
          const col = getCol(pos);
          console.log(row, col);
          let arr = intialBoard.getArr();
          for (let i = 1; i < size; i++){
              arr[row][col + i] = 0;
              document.querySelector(
                `[data-id='${+(+pos + i)}']`
              ).textContent = "";
          }
      }
      
    setTimeout(() => e.target.classList.add("hidden"), 0);
  }
};

export default dragDrop;
