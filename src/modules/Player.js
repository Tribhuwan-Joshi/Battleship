const Player = (ele) => {
    let turn = false; 
    function isTurn() {
        return turn
    };
    function changeTurn() {
        if (ele.classList.contains("underline")) {
            ele.classList.remove("underline");
        }
        else {
            ele.classList.add("underline");
        }
        turn = !turn;
    }
    return {
        isTurn,changeTurn
    }
}
