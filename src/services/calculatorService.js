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

function calculatorService(tempResult, currentNumber, currentOperation) {
  let resp;

  operations.filter(operationItem => {
    if (operationItem.operation === currentOperation) {
      resp = operationItem.functionOperation(tempResult, currentNumber);
    } else if (!currentOperation) {
      resp = currentNumber;
    }
  });

  return resp;
}

export default calculatorService;
