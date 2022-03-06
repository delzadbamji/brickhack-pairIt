import React from "react";
import "./LandingButton.css";

export default function Button(props) {
  return (
    <button className="btn-hover">
      <div>{props.Content}</div>
    </button>
  );
}
