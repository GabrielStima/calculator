const calculatorService = require("../../../src/services/calculatorService")
  .default;

describe("Calculator service test", () => {
  test("Test addition operation", () => {
    expect(calculatorService(2, 2, "+")).toBe(4);
  });
  test("Test subtration operation", () => {
    expect(calculatorService(2, 2, "-")).toBe(0);
  });
  test("Test multiplication operation", () => {
    expect(calculatorService(2, 2, "*")).toBe(4);
  });
  test("Test division operation", () => {
    expect(calculatorService(2, 2, "/")).toBe(1);
  });
  test("Test division operation with 0. Case 1", () => {
    expect(calculatorService(2, "0", "/")).toBe(2);
  });
  test("Test division operation with 0. Case 2", () => {
    expect(calculatorService(2, "0.", "/")).toBe(2);
  });
  test("Test division operation with 0. Case 3", () => {
    expect(calculatorService(2, 0, "/")).toBe(2);
  });
  test("Test percent without currentNumber", () => {
    expect(calculatorService(2, "", "%")).toBe(2);
  });
  test("Test percent", () => {
    expect(calculatorService(120, 50, "%")).toBe(60);
  });
  test("Test calculation without currentOperation", () => {
    expect(calculatorService(0, 2, "")).toBe(2);
  });
  test("Test calculation without currentNumber", () => {
    expect(calculatorService(2, 0, "/")).toBe(2);
  });
  test("Test calculation without currentNumber and currentOperation", () => {
    expect(calculatorService(2, "", "")).toBe(2);
  });
});
