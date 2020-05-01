const { divisionCalc } = require("../../../src/services/divisionService");

describe("Division service test", () => {
  test("Test with integers", () => {
    expect(divisionCalc(2, 2)).toBe(1);
  });
  test("Test with string numbers", () => {
    expect(divisionCalc("2", "2")).toBe(1);
  });
  test("Test with float numbers", () => {
    expect(divisionCalc("0.1", "2")).toBe(0.05);
    expect(divisionCalc("0.212", "0.36")).toBe(0.5888888888888889);
  });
});
