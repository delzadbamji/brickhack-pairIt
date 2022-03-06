import React from "react";
import "./LandingButton.css";

export default function LandingButton(props) {
  return (
    <button className="btn-hover" onClick={props.onClick}>
      <div>{props.Content}</div>
    </button>
  );
}
