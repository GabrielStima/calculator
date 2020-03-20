import React from "react";
import "../assets/calculatorView.css";
export default function ComponentCalculatorView(props) {
  return (
    <div className="view">
      <p className={`step-default ${!props.finishCalc && "zoom-step"}`}>
        {props.calc}
      </p>
      <p className={`step-default ${props.finishCalc && "zoom-step"}`}>
        {props.result}
      </p>
    </div>
  );
}
