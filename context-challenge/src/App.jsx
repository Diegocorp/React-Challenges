import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./Components/Form/Form";
import UserInfo from "./Components/UserInfo/UserInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <UserInfo />
    </div>
  );
}

export default App;
