import React from "react";
import "../assets/calculatorButtons.css";
import BackspaceIcon from "@material-ui/icons/Backspace";

function sendNumber(props, data) {
  props.callbackSendNumber(data);
  finishOperation(false);
}

function sendOperator(props, data) {
  props.callbackSendOperator(data);
  finishOperation(false);
}

function sendSpecialFunction(props, data) {
  props.callbackSendSpecialFunction(data);
  finishOperation(false);
}

function finishOperation(props, data) {
  props.callbackFinishOperation(data);
}

const ComponentCalculatorButton = (text, value) => {};
export default function ComponentCalculatorButtons(props) {
  return (
    <div className="container">
      <div className="grid-container">
        <div
          className="grid-item"
          onClick={() => sendSpecialFunction(props, "DeleteAll")}
        >
          C
        </div>
        <div
          className="grid-item"
          onClick={() => sendSpecialFunction(props, "DeleteLast")}
        >
          <BackspaceIcon />
        </div>
        <div className="grid-item" onClick={() => sendOperator(props, "%")}>
          %
        </div>
        <div className="grid-item" onClick={() => sendOperator(props, "/")}>
          /
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 7)}>
          7
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 8)}>
          8
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 9)}>
          9
        </div>
        <div className="grid-item" onClick={() => sendOperator(props, "x")}>
          x
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 4)}>
          4
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 5)}>
          5
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 6)}>
          6
        </div>
        <div className="grid-item" onClick={() => sendOperator(props, "-")}>
          -
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 1)}>
          1
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 2)}>
          2
        </div>
        <div className="grid-item" onClick={() => sendNumber(props, 3)}>
          3
        </div>
        <div className="grid-item" onClick={() => sendOperator(props, "+")}>
          +
        </div>
        <div
          className="grid-item key-zero"
          onClick={() => sendNumber(props, 0)}
        >
          0
        </div>
        <div className="grid-item">.</div>
        <div className="grid-item" onClick={() => finishOperation(props, true)}>
          =
        </div>
      </div>
    </div>
  );
}
