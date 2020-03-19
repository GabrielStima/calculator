import React from "react";
import ComponentCalculatorView from "./componentCalculatorView";
import ComponentCalculatorButtons from "./componentCalculatorButtons";

export default function ComponentCalculator() {
  const [calcText, setCalcText] = React.useState("1 + 1");
  const [resultText, setResultText] = React.useState("= 2");

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
    console.log("finishOperation", data);
  }

  return (
    <>
      <ComponentCalculatorView calc={calcText} result={resultText} />
      <ComponentCalculatorButtons
        callbackSendNumber={sendNumber}
        callbackSendOperator={sendOperator}
        callbackSendSpecialFunction={sendSpecialFunction}
        callbackFinishOperation={finishOperation}
      />
    </>
  );
}
