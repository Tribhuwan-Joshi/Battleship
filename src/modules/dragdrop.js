
const dragDrop = (() => {
    const ships = document.querySelectorAll(".ships");
    ships.forEach(s => s.addEventListener('dragstart', dragStart));
    const pixels = document.querySelectorAll(".gameBoard .pixel");
    pixels.forEach(p => p.addEventListener("dragenter", dragEnter));

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => e.target.classList.add("hidden"), 0);
   
    }
    function dragEnter(e) {
        e.target.classList.add("drag-over");
    }

})

export default dragDrop;

