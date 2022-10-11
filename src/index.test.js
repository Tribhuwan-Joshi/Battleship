import Ship from "./modules/ship";

test("Ship", () => {
  expect(Ship(4).isSunk()).toBe(false);
})

test("hits", () => {
  let s = Ship(5);
  s.hit();
  s.hit();
  expect(s.hits).toBe(2);
})