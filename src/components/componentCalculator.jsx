import React from "react";
import ComponentCalculatorView from "./componentCalculatorView";
import ComponentCalculatorKeyboard from "./componentCalculatorKeyboard";

export default function ComponentCalculator() {
  const [calcText, setCalcText] = React.useState("0");
  const [resultText, setResultText] = React.useState("0");
  const [isFinish, setIsFinish] = React.useState(false);

  function sendNumber(data) {
    console.log("sendNumber", data);
  }

  function sendOperator(data) {
    console.log("sendOperator", data);
  }

  function sendSpecialFunction(data) {
    console.log("sendSpecialFunction", data);
  }

  function finishOperation(data) {
    setIsFinish(data);
  }

  return (
    <>
      <ComponentCalculatorView
        calc={calcText}
        result={resultText}
        finishCalc={isFinish}
      />
      <ComponentCalculatorKeyboard
        callbackSendNumber={sendNumber}
        callbackSendOperator={sendOperator}
        callbackSendSpecialFunction={sendSpecialFunction}
        callbackFinishOperation={finishOperation}
      />
    </>
  );
}
