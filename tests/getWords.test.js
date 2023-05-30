const { getWords } = require("../src/getWords");

test("should throw an error if it is not string", () => {
  expect(() => getWords(100)).toThrow();
  expect(() => getWords(true)).toThrow();
  expect(() => getWords(false)).toThrow();
  expect(() => getWords(null)).toThrow();
  expect(() => getWords(undefined)).toThrow();
  expect(() => getWords(["words"])).toThrow();
  expect(() => getWords({ name: "words" })).toThrow();
  expect(() => getWords()).toThrow();
});

test("should return the same string if the argument is a word", () => {
  expect(getWords("Mohosin")).toBe("Mohosin");
  expect(getWords("TypeScript")).toBe("TypeScript");
  expect(getWords("Jest")).toBe("Jest");
});

test("should return the array of string", () => {
  const words = getWords("Mohosin Hasan");
  expect(words).toHaveLength(2);
  expect(words).toContain("Mohosin");

  const words = getWords("Test Driven Development");
  expect(words).toHaveLength(3);
  expect(words).toContain("Test");
});
