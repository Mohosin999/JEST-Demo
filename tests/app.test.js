const { add, isEven } = require("../app");

test("should return correct addition value", () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(8, 2)).toEqual(10);
  expect(add(80, 20)).toEqual(100);
});

test("should throw an error if arguments are not number", () => {
  expect(() => add("A", 5)).toThrow();
});

test("isEven() should return true", () => {
  expect(isEven(10)).toBe(true);
  expect(isEven(22)).toBe(true);
  expect(isEven(88)).toBe(true);
});

test("isEven() should return false", () => {
  expect(isEven(1)).toBe(false);
  expect(isEven(21)).toBe(false);
  expect(isEven(181)).toBe(false);
});

test("isEven() should throw an error", () => {
  expect(() => isEven("10")).toThrow();
  expect(() => isEven(true)).toThrow();
  expect(() => isEven(false)).toThrow();
  expect(() => isEven(null)).toThrow();
  expect(() => isEven(undefined)).toThrow();
  expect(() => isEven({})).toThrow();
  expect(() => isEven([])).toThrow();
});
