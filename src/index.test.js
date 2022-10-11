import Ship from "./modules/ship";
import GameBoard from "./modules/gameBoard.js"
test("Ship Factory", () => {
  expect(Ship(4).isSunk()).toBe(false);
})

test("hits feature", () => {
  let s = Ship(5);
  s.hit();
  s.hit();
  expect(s.hits).toBe(2);
})

test("place ships", () => {
  let g1 = GameBoard();
  g1.placeShip(2, 3);
  expect(g1.getArr()[2][3].hits).toBe(0);
})

test("recieve Attack", () => {
  let g1 = GameBoard();
  g1.receiveAttack(1, 2);
  expect(g1.getArr()[1][2]).toBe(1);
})