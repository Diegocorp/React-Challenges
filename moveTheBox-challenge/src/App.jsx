import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const transport = (direction) => {
    if (direction === "up") {
      setPositionY(positionY - 30);
    }
    if (direction === "down") {
      setPositionY(positionY + 30);
    }
    if (direction === "left") {
      setPositionX(positionX - 30);
    }
    if (direction === "right") {
      setPositionX(positionX + 30);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <strong>Move the box!</strong>
        <div className="buttons">
          <div>
            <button value="up" onClick={(e) => transport(e.target.value)}>
              👆 Move Up 👆
            </button>
          </div>
          <button value="left" onClick={(e) => transport(e.target.value)}>
            👆 Move Left 👆
          </button>
          <button value="down" onClick={(e) => transport(e.target.value)}>
            👆 Move Down 👆
          </button>
          <button value="right" onClick={(e) => transport(e.target.value)}>
            👆 Move Right 👆
          </button>
        </div>
        <div
          className="box"
          style={{ transform: `translate(${positionX}px, ${positionY}px )` }}
        ></div>
      </header>
    </div>
  );
}

export default App;
