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
  const [tempResult, setTempResult] = React.useState(0);

  function shouldChange() {
    return (
      objCalc.numbers[objCalc.numbers.length - 1] === 0 ||
      objCalc.numbers[objCalc.numbers.length - 1] === "0"
    );
  }

  function ruleForPercentageOperation(lastNumber, lastOperation) {
    return calculatorService(tempResult, lastNumber, lastOperation);
  }

  function reduceForLastNumber(number) {
    let str = number;
    str = str.split("");
    str.length -= 1;
    str = str.join("");
    return str;
  }

  function convertForCorrectResult(objCalcTemp) {
    const reverseOperation = [
      { currentOperator: "+", reverseOperator: "-" },
      { currentOperator: "-", reverseOperator: "+" },
      { currentOperator: "*", reverseOperator: "/" },
      { currentOperator: "/", reverseOperator: "*" }
    ];

    let objResult = objCalcTemp;

    reverseOperation.filter(reverseOpe => {
      if (reverseOpe.currentOperator === objCalcTemp.operations[objCalc.operations.length - 1]) {
        objResult.result = calculatorService(
          objResult.result,
          reduceForLastNumber(`${objResult.numbers[objResult.numbers.length - 1]}`),
          reverseOpe.reverseOperator
        );
      }
    });

    return objResult;
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
    if (
      `${objCalcTemp.numbers[objCalcTemp.numbers.length - 1]}`.length > 1 &&
      objCalcTemp.operations[objCalc.operations.length - 1] !== "%"
    ) {
      objCalcTemp = convertForCorrectResult(objCalcTemp);
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
    objCalcTemp.numbers.push("");

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
      setTempResult(0);
    }
  }

  useEffect(() => {
    (() => {
      if (isPercent && tempResult === 0) {
        setTempResult(objCalc.result);
      }
    })();
  }, [isPercent, objCalc, tempResult]);

  function deleteAll() {
    const inicialCalcState = {
      numbers: [0],
      operations: [],
      result: 0
    };

    setIsPercent(false);
    setTempResult(0);
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

    if (!isPercent) {
      temp.result = calculatorService(
        temp.result,
        temp.numbers[temp.numbers.length - 1],
        temp.operations[temp.operations.length - 1]
      );
    } else {
      temp.result = ruleForPercentageOperation(
        temp.numbers[temp.numbers.length - 1],
        temp.operations[temp.operations.length - 1]
      );
    }

    return temp;
  }

  function ruleStrLengthEqualsThanOne() {
    const temp = objCalc;

    if (!isPercent) {
      temp.result = calculatorService(temp.result, temp.numbers[temp.numbers.length - 1], "-");
      temp.numbers[temp.numbers.length - 1] = "0";
    } else {
      temp.numbers[temp.numbers.length - 1] = "0";

      temp.result = ruleForPercentageOperation(
        temp.numbers[temp.numbers.length - 1],
        temp.operations[temp.operations.length - 1]
      );
    }

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
