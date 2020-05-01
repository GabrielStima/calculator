const { percentCalc } = require("../../../src/services/percentService");

describe("Percent service test", () => {
  test("How much is 50% of 120, Test with integers", () => {
    expect(percentCalc(120, 50)).toBe(60);
  });
  test("How much is 50% of 120,Test with strings", () => {
    expect(percentCalc("120", "50")).toBe(60);
  });
  test("How much is 50% of 120,Test with strings", () => {
    expect(percentCalc("120", "50")).toBe(60);
  });
  test("How much is 50% of 1,Test with strings", () => {
    expect(percentCalc("1", "50")).toBe(0.5);
  });
  test("How much is 0.5% of 1,Test with strings", () => {
    expect(percentCalc("1", "0.5")).toBe(0.005);
  });
});
