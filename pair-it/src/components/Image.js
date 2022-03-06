import React from "react";

function Image(props) {
  return (
    <div>
      <img
        src={props.source}
        alt={props.source.substring(props.source.indexOf("?") + 1)}
      ></img>
    </div>
  );
}
export default Image;
