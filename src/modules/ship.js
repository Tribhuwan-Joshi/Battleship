const Ship = (s) => {
  let hitCount = 0;
  const length = s;
    const hit = () => hitCount++;
   
  const isSunk = () => {
    return hitCount == length;
  };
  return { length, hit, isSunk, get hits(){return hitCount} };
};

// module.exports = Ship
export default Ship;
