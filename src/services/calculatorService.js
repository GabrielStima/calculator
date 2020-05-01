import { additionCalc } from "./additionService";
import { subtractionCalc } from "./subtractionService";
import { multiplicationCalc } from "./multiplicationService";
import { divisionCalc } from "./divisionService";
import { percentCalc } from "./percentService";

const operations = [
  { operation: "+", functionOperation: additionCalc },
  { operation: "-", functionOperation: subtractionCalc },
  { operation: "*", functionOperation: multiplicationCalc },
  { operation: "/", functionOperation: divisionCalc },
  { operation: "%", functionOperation: percentCalc },
];

const ruleForDivideZero = (currentNumber) => {
  return currentNumber === "0" || currentNumber === "0." || currentNumber === 0;
};

const rulesForOperation = (
  operationItem,
  tempResult,
  currentNumber,
  currentOperation
) => {
  let result;

  if (currentOperation === "%" && currentNumber === "") {
    result = tempResult;
  } else if (currentOperation === "/" && ruleForDivideZero(currentNumber)) {
    result = tempResult;
  } else {
    result = operationItem.functionOperation(tempResult, currentNumber);
  }

  return result;
};

const calculatorService = (tempResult, currentNumber, currentOperation) => {
  let resp;

  operations.filter((operationItem) => {
    if (operationItem.operation === currentOperation) {
      resp = rulesForOperation(
        operationItem,
        tempResult,
        currentNumber,
        currentOperation
      );
    } else if (!currentOperation && currentNumber !== "") {
      resp = currentNumber;
    } else if (currentNumber === "") {
      resp = tempResult;
    }
  });

  return resp;
};

export default calculatorService;
