import Ship from "./ship";
// const Ship = require("./ship.js");

const GameBoard = () => {
  let arr = new Array(10).fill().map(() => new Array(10).fill(0));
  function placeShip(size, row, col) {
    if (isValidpos(size, col) && isClearPos(size, row, col)) {
      for (let i = 0; i < size; i++) {
        const ship = Ship(size);
        arr[row][col + i] = ship;
      }
    }
  }
  function isValidpos(size, col) {
    for (let i = 0; i < size; i++) {
      if (col + i > 9) return false;
    }
    return true;
  }
    function isClearPos(size, row, col) {
      
    for (let i = 0; i < size; i++) {
      if (getArr()[row][col + i]) {
        return false;
      }
    }
    return true;
  }
  function getArr() {
    return arr;
  }
  function receiveAttack(x, y) {
    if (arr[x][y]) {
      if (!arr[x][y].isSunk()) {
        arr[x][y].hit();
      }
    } else {
      arr[x][y] = -1;
    }
  }
  return { placeShip, receiveAttack, isValidpos, isClearPos, getArr };
};



// module.exports = GameBoard;
export default GameBoard;
