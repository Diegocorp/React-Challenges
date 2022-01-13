import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const people = {
    name: "Chris",
    twitter: "chris__sev",
    bio: "The dude",
  };

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(people).map((key) => (
          <p>
            {key.toUpperCase()}: {people[key]}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
