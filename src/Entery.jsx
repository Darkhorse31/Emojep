import React from "react";
import "./styles.css";

function Entery(props) {
  return (
    <dl className="dictionary">
      <dt>
        <h1>{props.emojie}</h1>
        <span className="name">{props.name}</span>
      </dt>
      <dd>{props.detail}</dd>
    </dl>
  );
}

export default Entery;
