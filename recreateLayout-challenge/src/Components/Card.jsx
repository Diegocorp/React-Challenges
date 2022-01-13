import React from "react";
import "./Card.css";

export default function Card({ icon, label, number }) {
  return (
    <div className="card">
      <p className="title">
        <i>{icon} </i>
        {label}
      </p>
      <p className="number">{number.toLocaleString()}</p>
    </div>
  );
}
