import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Update Data from an input</h1>
        </div>
        <div className="display-data">
          <h3>Display Name: {name}</h3>
          <h3>Display Age: {age}</h3>
        </div>
        <div className="input-data">
          <h4>Name:</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4>Age:</h4>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
