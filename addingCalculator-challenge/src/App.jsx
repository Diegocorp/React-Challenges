import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const opeations = (operator) => {
    if (operator === "+") {
      setResult(parseInt(num1) + parseInt(num2));
    }

    if (operator === "-") {
      setResult(num1 - num2);
    }

    if (operator === "/") {
      setResult(num1 / num2);
    }

    if (operator === "*") {
      setResult(num1 * num2);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Two numbers</h3>
        <div className="inputs-data">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(+e.target.value)}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(+e.target.value)}
          />
        </div>
        <div className="operators">
          <button value="+" onClick={(e) => opeations(e.target.value)}>
            +
          </button>
          <button value="-" onClick={(e) => opeations(e.target.value)}>
            -
          </button>
          <button value="/" onClick={(e) => opeations(e.target.value)}>
            /
          </button>
          <button value="*" onClick={(e) => opeations(e.target.value)}>
            *
          </button>
        </div>
        <h1>{result}</h1>
      </header>
    </div>
  );
}

export default App;
