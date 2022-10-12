const Player = () => {
    let turn = false;
    function isTurn() {
        return turn
    };
    function changeTurn() {
        turn = !turn;
    }
    return {
        isTurn,changeTurn
    }
}
