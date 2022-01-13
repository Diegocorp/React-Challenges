import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-styles">
      <p>
        We'll use the React Context API to pass and receive data in any
        component{" "}
      </p>
      <div className="inputs-field">
        <p>Update Name:</p>
        <input type="text" />
        <p>Update Location:</p>
        <input type="text" />
      </div>
    </div>
  );
}
