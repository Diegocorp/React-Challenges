import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card icon="👉" label="Points" number={3000} />
        <Card icon="⚡" label="Lightnings" number={6540} />
        <Card icon="🤙" label="Shakas" number={337010} />
        <Card icon="💎" label="Diamonds" number={98661} />
      </header>
    </div>
  );
}

export default App;
