const { subtractionCalc } = require("../../../src/services/subtractionService");

describe("Subtration service test", () => {
  test("Test with integers", () => {
    expect(subtractionCalc(6, 2)).toBe(4);
  });
  test("Test with string numbers", () => {
    expect(subtractionCalc("6", "2")).toBe(4);
  });
  test("Test with float numbers", () => {
    expect(subtractionCalc("0.4", "0.2")).toBe(0.2);
    expect(subtractionCalc("0.212", "0.16")).toBe(0.05199999999999999);
  });
});
