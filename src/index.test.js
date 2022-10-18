// const Ship = require("./modules/ship");
// const GameBoard = require("./modules/gameBoard.js");
import Ship from "./modules/ship";
import GameBoard from "./modules/gameBoard";
import { getRow, getCol } from "./modules/helper";

test("Ship Factory", () => {
  expect(Ship(4).isSunk()).toBe(false);
});

test("hits feature", () => {
  let s = Ship(5);
  s.hit();
  s.hit();
  expect(s.hits).toBe(2);
});

test("place ships", () => {
  let g1 = GameBoard();
  g1.placeShip(2, 2, 7);
  expect(g1.getArr()[2][7].hits).toBe(0);
});

test("recieve Attack", () => {
  let g1 = GameBoard();
  g1.receiveAttack(1, 2);
  expect(g1.getArr()[1][2]).toBe(-1);
});

test("valid position", () => {
  let g1 = GameBoard();
  expect(g1.isValidpos(5, 1)).toBe(true);
  expect(g1.isValidpos(1, 2)).toBe(true);
});

test("is grid space clear", () => {
  let g1 = GameBoard();
  g1.placeShip(2, 3, 5);
  expect(g1.isClearPos(2, 3, 4)).toBe(false);
  expect(g1.isClearPos(2, 3, 3)).toBe(true);
});

test("get Position of pixel", () => {
  expect(getRow(19)).toBe(1);
  expect(getCol(19)).toBe(9);
  expect(getRow(0)).toBe(0);
  expect(getCol(0)).toBe(0);
  expect(getRow(33)).toBe(3);
  expect(getCol(33)).toBe(3);
  expect(getRow(99)).toBe(9);
  expect(getCol(99)).toBe(9);
});
