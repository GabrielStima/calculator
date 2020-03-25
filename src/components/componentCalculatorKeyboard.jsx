import React from "react";
import "../assets/calculatorButtons.css";
import BackspaceIcon from "@material-ui/icons/Backspace";
import ComponentCalculatorButton from "./componentCalculatorButton";

export default function ComponentCalculatorKeyboard({
  callbackSendNumber,
  callbackSendOperator,
  callbackSendSpecialFunction,
  callbackFinishOperation
}) {
  const arrayButtons = [
    {
      value: "DeleteAll",
      callbackFunction: callbackSendSpecialFunction,
      text: "AC",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "DeleteLast",
      callbackFunction: callbackSendSpecialFunction,
      text: <BackspaceIcon />,
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "%",
      callbackFunction: callbackSendOperator,
      text: "%",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "/",
      callbackFunction: callbackSendOperator,
      text: "/",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 7,
      callbackFunction: callbackSendNumber,
      text: "7",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 8,
      callbackFunction: callbackSendNumber,
      text: "8",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 9,
      callbackFunction: callbackSendNumber,
      text: "9",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "*",
      callbackFunction: callbackSendOperator,
      text: "x",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 4,
      callbackFunction: callbackSendNumber,
      text: "4",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 5,
      callbackFunction: callbackSendNumber,
      text: "5",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 6,
      callbackFunction: callbackSendNumber,
      text: "6",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "-",
      callbackFunction: callbackSendOperator,
      text: "-",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 1,
      callbackFunction: callbackSendNumber,
      text: "1",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 2,
      callbackFunction: callbackSendNumber,
      text: "2",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 3,
      callbackFunction: callbackSendNumber,
      text: "3",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "+",
      callbackFunction: callbackSendOperator,
      text: "+",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: 0,
      callbackFunction: callbackSendNumber,
      text: "0",
      cssClass: "key-zero",
      finishOperation: callbackFinishOperation
    },
    {
      value: ".",
      callbackFunction: callbackSendNumber,
      text: ".",
      cssClass: "",
      finishOperation: callbackFinishOperation
    },
    {
      value: "=",
      callbackFunction: "",
      text: "=",
      cssClass: "",
      finishOperation: callbackFinishOperation
    }
  ];

  return (
    <div className="container">
      <div className="grid-container">
        {arrayButtons.map(button => (
          <ComponentCalculatorButton
            value={button.value}
            callbackFunction={button.callbackFunction}
            text={button.text}
            cssClass={button.cssClass}
            finishOperation={button.finishOperation}
          />
        ))}
      </div>
    </div>
  );
}
