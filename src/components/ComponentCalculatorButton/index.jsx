import React from "react";

const ComponentCalculatorButton = props => {
  return (
    <div
      className={`grid-item ${props.cssClass}`}
      onClick={() => {
        props.callbackFunction && props.callbackFunction(props.value);
        props.finishOperation(props.value === "=" ? true : false);
      }}
    >
      {props.text}
    </div>
  );
};

export default ComponentCalculatorButton;
