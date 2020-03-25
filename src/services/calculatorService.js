const operations = [
  { operation: "+", functionOperation: additionCalc },
  { operation: "-", functionOperation: subtractionCalc },
  { operation: "*", functionOperation: multiplicationCalc },
  { operation: "/", functionOperation: divisionCalc },
  { operation: "%", functionOperation: percentCalc }
];

function convertStrForFloat(data) {
  return parseFloat(data);
}

function additionCalc(tempResult, curretnNumber) {
  return convertStrForFloat(tempResult) + convertStrForFloat(curretnNumber);
}

function subtractionCalc(tempResult, curretnNumber) {
  return convertStrForFloat(tempResult) - convertStrForFloat(curretnNumber);
}

function multiplicationCalc(tempResult, curretnNumber) {
  return convertStrForFloat(tempResult) * convertStrForFloat(curretnNumber);
}

function divisionCalc(tempResult, curretnNumber) {
  return convertStrForFloat(tempResult) / convertStrForFloat(curretnNumber);
}

function percentCalc(tempResult, curretnNumber) {
  return (
    (convertStrForFloat(tempResult) / 100) * convertStrForFloat(curretnNumber)
  );
}

function rulesForDontExecuteFuncWithZero(
  currentNumber,
  tempResult,
  operationItem
) {
  if (convertStrForFloat(currentNumber) === 0) {
    return tempResult;
  } else {
    return operationItem.functionOperation(tempResult, currentNumber);
  }
}

function calculatorService(tempResult, currentNumber, currentOperation) {
  let resp;

  operations.filter(operationItem => {
    if (operationItem.operation === currentOperation) {
      if (
        currentOperation === "%" ||
        currentOperation === "/" ||
        currentOperation === "*"
      ) {
        resp = rulesForDontExecuteFuncWithZero(
          currentNumber,
          tempResult,
          operationItem
        );
      } else {
        resp = operationItem.functionOperation(tempResult, currentNumber);
      }
    } else if (!currentOperation) {
      resp = currentNumber;
    }
  });

  return resp;
}

export default calculatorService;
