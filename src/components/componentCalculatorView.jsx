import React from "react";
import "../assets/calculatorView.css";
export default function ComponentCalculatorView(props) {
  return (
    <div className="view">
      <p>{props.calc}</p>
      <p>{props.result}</p>
    </div>
  );
}
