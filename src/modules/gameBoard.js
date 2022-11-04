const GameBoard = () => {
  let arr = new Array(10).fill().map(() => new Array(10).fill(0));
  function canDeploy(size, row, col) {
   return isValidpos(size, col) && isClearPath(size, row, col)
   
    }
  
  function isValidpos(size, col) {
    for (let i = 0; i < size; i++) {
      if (col + i > 9) return false;
    }
    return true;
  }
    function isClearPath(size, row, col) {
      
    for (let i = -1; i < size+1; i++) {
      if (getArr()[row][col + i]) {
        return false;
      }
    }
    return true;
  }
  function setArr(row, col, node) {
    arr[row][col] = node;
  }
  function resetBoard() {
    arr = new Array(10).fill().map(() => new Array(10).fill(0));
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
  return { canDeploy, receiveAttack, getArr,setArr,resetBoard };
};



export default GameBoard;
