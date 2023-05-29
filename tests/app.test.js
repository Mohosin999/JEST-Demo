const { add } = require("../app");

test("should return correct addition value", () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(8, 2)).toEqual(10);
  expect(add(80, 20)).toEqual(100);
});

test("should throw an error if arguments are not number", () => {
  expect(() => add("A", 5)).toThrow();
});
