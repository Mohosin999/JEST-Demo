const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid Argument Type");
  }
  return a + b;
};

module.exports = {
  add,
};
