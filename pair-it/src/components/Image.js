import React from "react";

function Image(props) {
  return (
    <div>
      <img
        src={props.source}
        alt="display"
      ></img>
    </div>
  );
}
export default Image;
