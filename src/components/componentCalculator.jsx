import React from "react";
import calculatorService from "../services/calculatorService";
import ComponentCalculatorView from "./componentCalculatorView";
import ComponentCalculatorKeyboard from "./componentCalculatorKeyboard";
import { useEffect } from "react";

export default function ComponentCalculator() {
  const [objCalc, setObjCalct] = React.useState({
    numbers: [0],
    operations: [],
    result: 0
  });
  const [isFinish, setIsFinish] = React.useState(false);
  const [isPercent, setIsPercent] = React.useState(false);
  const [tempResultPercent, setTempResultPercent] = React.useState(0);

  function shouldChange() {
    return (
      objCalc.numbers[objCalc.numbers.length - 1] === 0 ||
      objCalc.numbers[objCalc.numbers.length - 1] === "0"
    );
  }

  function ruleForPercentageOperation(lastNumber, lastOperation) {
    return calculatorService(tempResultPercent, lastNumber, lastOperation);
  }

  function sendNumber(data) {
    let objCalcTemp = objCalc;
    if (shouldChange() && data !== ".") {
      objCalcTemp.numbers[objCalcTemp.numbers.length - 1] = data;
    } else {
      objCalcTemp.numbers[objCalcTemp.numbers.length - 1] = `${
        objCalcTemp.numbers[objCalcTemp.numbers.length - 1]
      }${data}`;
    }

    if (!isPercent) {
      objCalcTemp.result = calculatorService(
        objCalcTemp.result,
        objCalcTemp.numbers[objCalc.numbers.length - 1],
        objCalcTemp.operations[objCalc.operations.length - 1]
      );
    } else {
      objCalcTemp.result = ruleForPercentageOperation(
        objCalcTemp.numbers[objCalc.numbers.length - 1],
        objCalcTemp.operations[objCalc.operations.length - 1]
      );
    }

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

    setIsPercent(data === "%");

    if (data !== "%") {
      setTempResultPercent(0);
    }
  }

  useEffect(() => {
    (() => {
      if (isPercent && tempResultPercent === 0) {
        setTempResultPercent(objCalc.result);
      }
    })();
  }, [isPercent, objCalc, tempResultPercent]);

  function deleteAll() {
    const inicialCalcState = {
      numbers: [0],
      operations: [],
      result: 0
    };

    setIsPercent(false);
    setTempResultPercent(0);
    setObjCalct(prevState => {
      return { ...prevState, ...inicialCalcState };
    });
  }

  function ruleStrLengthGreaterThanOne() {
    const temp = objCalc;
    let lastStr = temp.numbers[temp.numbers.length - 1];
    lastStr = lastStr.split("");
    lastStr.length -= 1;
    lastStr = lastStr.join("");
    temp.numbers[temp.numbers.length - 1] = lastStr;
    temp.result = calculatorService(
      temp.result,
      temp.numbers[temp.numbers.length - 1],
      temp.operations[temp.operations.length - 1]
    );
    return temp;
  }

  function ruleStrLengthEqualsThanOne() {
    const temp = objCalc;
    temp.result = calculatorService(
      temp.result,
      temp.numbers[temp.numbers.length - 1],
      "-"
    );
    temp.numbers[temp.numbers.length - 1] = "0";
    return temp;
  }
  function ruleStrEqualsThanZero() {
    const temp = objCalc;

    if (temp.numbers.length >= 2) {
      temp.numbers.length -= 1;
      temp.operations.length -= 1;

      temp.result = calculatorService(
        temp.result,
        temp.numbers[temp.numbers.length - 1],
        temp.operations[temp.operations.length - 1]
      );
    }

    return temp;
  }

  function handleRulesDeleteLast() {
    let lastItem = `${objCalc.numbers[objCalc.numbers.length - 1]}`;

    switch (true) {
      case lastItem.length > 1:
        return ruleStrLengthGreaterThanOne();
      case lastItem.length === 1 && lastItem === "0":
        return ruleStrEqualsThanZero();
      case lastItem.length === 1:
        return ruleStrLengthEqualsThanOne();
      default:
        console.log("last", lastItem);
        alert("Rule not registered");
        break;
    }
  }

  function deleteLastWrap() {
    const temp = handleRulesDeleteLast();
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
