import React from "react";
import calculatorService from "../services/calculatorService";
import ComponentCalculatorView from "./componentCalculatorView";
import ComponentCalculatorKeyboard from "./componentCalculatorKeyboard";

export default function ComponentCalculator() {
  const [objCalc, setObjCalct] = React.useState({
    numbers: [0],
    operations: [],
    result: 0
  });
  const [isFinish, setIsFinish] = React.useState(false);

  function shouldChange() {
    return objCalc.numbers[objCalc.numbers.length - 1] === 0;
  }

  function sendNumber(data) {
    let objCalcTemp = objCalc;
    if (shouldChange()) {
      objCalcTemp.numbers[objCalcTemp.numbers.length - 1] = data;
    } else {
      objCalcTemp.numbers[objCalcTemp.numbers.length - 1] = `${
        objCalcTemp.numbers[objCalcTemp.numbers.length - 1]
      }${data}`;
    }

    objCalcTemp.result = calculatorService(
      objCalcTemp.result,
      objCalcTemp.numbers[objCalc.numbers.length - 1],
      objCalcTemp.operations[objCalc.operations.length - 1]
    );

    setObjCalct(prevState => {
      return { ...prevState, ...objCalcTemp };
    });
  }

  function sendOperator(data) {
    let objCalcTemp = objCalc;
    objCalcTemp.operations.push(data);
    objCalcTemp.numbers.push(0);

    objCalcTemp.result = calculatorService(
      objCalcTemp.result,
      objCalcTemp.numbers[objCalc.numbers.length - 1],
      objCalcTemp.operations[objCalc.operations.length - 1]
    );

    setObjCalct(prevState => {
      return { ...prevState, ...objCalcTemp };
    });
  }

  function deleteAll() {
    const inicialCalcState = {
      numbers: [0],
      operations: [],
      result: 0
    };

    setObjCalct(prevState => {
      return { ...prevState, ...inicialCalcState };
    });
  }

  function ruleStrLengthGreaterThanOne() {
    const temp = objCalc;
    let lastStr = temp.numbers[temp.numbers.length - 1];
    lastStr = lastStr.split('');
    lastStr.length -= 1;
    lastStr = lastStr.join('');
    temp.numbers[temp.numbers.length - 1] = lastStr;
    setObjCalct(prevState => {
      return { ...prevState, ...temp };
    });
  }

  function ruleStrLengthEqualsThanOne() {
    
  }

  function ruleStrEqualsThanZero() {
    
  }


  function handleRulesDeleteLast() {
    let lastItem = objCalc.numbers[temp.numbers.length-1];

    switch (true) {
      case lastItem.length > 1:
        return ruleStrLengthGreaterThanOne()
      case lastItem.length === 1:
          return ruleStrLengthEqualsThanOne()
      case lastItem.length === 1 && lastItem === '0':
          return ruleStrEqualsThanZero()
      default:
        alert('Rule not registered')
        break;
    }
  }

  function deleteLastWrap() {
    const temp = handleRulesDeleteLast()
    
    setObjCalct(prevState => {
      return { ...prevState, ...temp };
    });
  }

  function sendSpecialFunction(data) {
    switch (data) {
      case "DeleteLast":
        deleteLastWrap();
        break;
      case "DeleteAll":
        deleteAll();
        break;
      default:
        alert("Function not register", data);
        break;
    }
  }

  function finishOperation(data) {
    setIsFinish(data);
  }
,
  return (
    <>
      <ComponentCalculatorView calc={objCalc} finishCalc={isFinish} />
      <ComponentCalculatorKeyboard
        callbackSendNumber={sendNumber}
        callbackSendOperator={sendOperator}
        callbackSendSpecialFunction={sendSpecialFunction}
        callbackFinishOperation={finishOperation}
      />
    </>
  );
}
