const {
  multiplicationCalc,
} = require("../../../src/services/multiplicationService");

describe("Multiplication service test", () => {
  test("Test with integers", () => {
    expect(multiplicationCalc(2, 2)).toBe(4);
  });
  test("Test with string numbers", () => {
    expect(multiplicationCalc("2", "2")).toBe(4);
  });
  test("Test with float numbers", () => {
    expect(multiplicationCalc("0.2", "2")).toBe(0.4);
    expect(multiplicationCalc("0.212", "0.36")).toBe(0.07632);
  });
});
