import Ship from "./ship";

const GameBoard = () => {
    let arr = new Array(10).fill().map(() => new Array(10).fill(0));
    function placeShip(x, y,s) {
        const ship = new Ship(s);
        arr[x][y] = ship;

    }
    function receiveAttack(x, y) {
        if (arr[x][y]) {
            if (!arr[x][y].isSunk()) {
                arr[x][y].hit();
            }

        }
        else {
            arr[x][y] = 1;
        }
    }
    return { placeShip, getArr() { return arr },receiveAttack }
    
}
GameBoard().placeShip(1, 2);
console.log(GameBoard.getArr)
export default GameBoard