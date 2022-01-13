import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState(null);
  const alertPhrase = "open sesame";

  if (phrase === alertPhrase) {
    alert("You may pass!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h3>What's the secret phrase?</h3>
          <input
            className="input"
            type="text"
            placeholder="Super duper secret"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <p>
            Hint: It's <strong>open sesame</strong>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
