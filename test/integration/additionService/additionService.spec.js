const { additionCalc } = require("../../../src/services/additionService");

describe("Addition service test", () => {
  test("Test with integers", () => {
    expect(additionCalc(2, 2)).toBe(4);
  });
  test("Test with string numbers", () => {
    expect(additionCalc("2", "2")).toBe(4);
  });
  test("Test with float numbers", () => {
    expect(additionCalc("0.1", "0.1")).toBe(0.2);
    expect(additionCalc("0.212", "0.36")).toBe(0.572);
  });
});
