const operations = [
  { operation: "+", functionOperation: additionCalc },
  { operation: "-", functionOperation: subtractionCalc },
  { operation: "*", functionOperation: multiplicationCalc },
  { operation: "/", functionOperation: divisionCalc },
  { operation: "%", functionOperation: percentCalc }
];

function additionCalc(tempResult, curretnNumber) {
  return parseInt(tempResult) + parseInt(curretnNumber);
}

function subtractionCalc(tempResult, curretnNumber) {
  return parseInt(tempResult) - parseInt(curretnNumber);
}

function multiplicationCalc(tempResult, curretnNumber) {
  return parseInt(tempResult) * parseInt(curretnNumber);
}

function divisionCalc(tempResult, curretnNumber) {
  return parseInt(tempResult) / parseInt(curretnNumber);
}

function percentCalc(tempResult, curretnNumber) {
  return (parseInt(tempResult) / 100) * parseInt(curretnNumber);
}

function rulesForPercentCalc(currentNumber, tempResult, operationItem) {
  if (parseInt(currentNumber) === 0) {
    return tempResult;
  } else {
    return operationItem.functionOperation(tempResult, currentNumber);
  }
}

function calculatorService(tempResult, currentNumber, currentOperation) {
  let resp;

  operations.filter(operationItem => {
    if (operationItem.operation === currentOperation) {
      if (currentOperation !== "%") {
        resp = operationItem.functionOperation(tempResult, currentNumber);
      } else {
        resp = rulesForPercentCalc(currentNumber, tempResult, operationItem);
      }
    } else if (!currentOperation) {
      resp = currentNumber;
    }
  });

  return resp;
}

export default calculatorService;
