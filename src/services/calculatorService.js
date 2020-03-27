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

function calculatorService(tempResult, currentNumber, currentOperation) {
  let resp;

  operations.filter(operationItem => {
    if (operationItem.operation === currentOperation) {
      if (currentOperation === "%" && currentNumber === "") {
        resp = tempResult;
      } else {
        resp = operationItem.functionOperation(tempResult, currentNumber);
      }
    } else if (!currentOperation && currentNumber !== "") {
      resp = currentNumber;
    } else if (currentNumber === "") {
      resp = tempResult;
    }
  });

  return resp;
}

export default calculatorService;
