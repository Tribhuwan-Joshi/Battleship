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
      e.target.appendChild(draggable);
      draggable.classList.remove("hidden");
      e.target.classList.remove("drag-over");
    }
  }
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => e.target.classList.add("hidden"), 0);
  }
};

export default dragDrop;
