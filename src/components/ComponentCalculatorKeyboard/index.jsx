import React from "react";
import "./styles.css";
import BackspaceIcon from "@material-ui/icons/Backspace";
import ComponentCalculatorButton from "../ComponentCalculatorButton";

export default function ComponentCalculatorKeyboard({
  callbackSendNumber,
  callbackSendOperator,
  callbackSendSpecialFunction,
  callbackFinishOperation,
}) {
  const arrayButtons = [
    {
      value: "DeleteAll",
      callbackFunction: callbackSendSpecialFunction,
      text: "AC",
      cssClass: "",
    },
    {
      value: "DeleteLast",
      callbackFunction: callbackSendSpecialFunction,
      text: <BackspaceIcon />,
      cssClass: "",
    },
    {
      value: "%",
      callbackFunction: callbackSendOperator,
      text: "%",
      cssClass: "",
    },
    {
      value: "/",
      callbackFunction: callbackSendOperator,
      text: "/",
      cssClass: "",
    },
    {
      value: 7,
      callbackFunction: callbackSendNumber,
      text: "7",
      cssClass: "",
    },
    {
      value: 8,
      callbackFunction: callbackSendNumber,
      text: "8",
      cssClass: "",
    },
    {
      value: 9,
      callbackFunction: callbackSendNumber,
      text: "9",
      cssClass: "",
    },
    {
      value: "*",
      callbackFunction: callbackSendOperator,
      text: "x",
      cssClass: "",
    },
    {
      value: 4,
      callbackFunction: callbackSendNumber,
      text: "4",
      cssClass: "",
    },
    {
      value: 5,
      callbackFunction: callbackSendNumber,
      text: "5",
      cssClass: "",
    },
    {
      value: 6,
      callbackFunction: callbackSendNumber,
      text: "6",
      cssClass: "",
    },
    {
      value: "-",
      callbackFunction: callbackSendOperator,
      text: "-",
      cssClass: "",
    },
    {
      value: 1,
      callbackFunction: callbackSendNumber,
      text: "1",
      cssClass: "",
    },
    {
      value: 2,
      callbackFunction: callbackSendNumber,
      text: "2",
      cssClass: "",
    },
    {
      value: 3,
      callbackFunction: callbackSendNumber,
      text: "3",
      cssClass: "",
    },
    {
      value: "+",
      callbackFunction: callbackSendOperator,
      text: "+",
      cssClass: "",
    },
    {
      value: 0,
      callbackFunction: callbackSendNumber,
      text: "0",
      cssClass: "key-zero",
    },
    {
      value: ".",
      callbackFunction: callbackSendNumber,
      text: ".",
      cssClass: "",
    },
    {
      value: "=",
      callbackFunction: "",
      text: "=",
      cssClass: "",
    },
  ];

  return (
    <div className="container">
      <div className="grid-container">
        {arrayButtons.map((button) => (
          <ComponentCalculatorButton
            value={button.value}
            callbackFunction={button.callbackFunction}
            text={button.text}
            cssClass={button.cssClass}
            finishOperation={callbackFinishOperation}
          />
        ))}
      </div>
    </div>
  );
}
