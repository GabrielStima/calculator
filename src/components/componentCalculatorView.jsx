import React from "react";
import "../assets/calculatorView.css";
export default function ComponentCalculatorView(props) {
  return (
    <div className="view">
      <p className={`step-default ${!props.finishCalc && "zoom-step"}`}>
        {props.calc.numbers[props.calc.numbers.length - 1]}
      </p>
      <p className={`step-default ${props.finishCalc && "zoom-step"}`}>
        {props.calc.result !== "0" && props.calc.result !== 0 ? (
          <span>{`= ${props.calc.result}`}</span>
        ) : (
          props.calc.result
        )}
      </p>
    </div>
  );
}
