const dragDrop = () => {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((s) => s.addEventListener("dragstart", dragStart));
  const pixels = document.querySelectorAll(".gameBoard .pixel");
  pixels.forEach((p) => {
    p.addEventListener("dragenter", dragEnter);
    p.addEventListener("dragover", dragOver);
    p.addEventListener("dragleave", dragLeave);
    p.addEventListener("drop", drop);
  });

  function dragOver(e) {
    e.target.classList.add("drag-over");
  }
  function dragEnter(e) {
    e.target.classList.add("drag-over");
  }
  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    e.target.classList.remove("drag-over");
  }
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => e.target.classList.add("hidden"), 0);
  }
};

export default dragDrop;
