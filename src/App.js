import React from "react";
import ComponentHeader from "./components/ComponentHeader";
import ComponentCalculator from "./components/ComponentCalculator";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <ComponentHeader />
      <ComponentCalculator />
    </div>
  );
}

export default App;
