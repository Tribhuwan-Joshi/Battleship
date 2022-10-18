function getRow(n) {
    return Math.floor(n / 10);
}

function getCol(n) {
    return n % 10;
}

export { getRow, getCol };