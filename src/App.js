import React from "react";
import ComponentHeader from "./components/componentHeader";
import ComponentCalculator from "./components/componentCalculator";
import "./assets/App.css";

function App() {
  return (
    <div className="App">
      <ComponentHeader />
      <ComponentCalculator />
    </div>
  );
}

export default App;
