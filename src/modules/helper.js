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

export { getRow, getCol, setDraggable, changeUI };
