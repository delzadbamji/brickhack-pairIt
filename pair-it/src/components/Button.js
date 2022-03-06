import React from "react";
export default function Button(props) {
  return (
    <div style={styles.text} onClick={props.onClick}>
      <div style={styles.btnText}>{props.name}</div>
    </div>
  );
}
const styles = {
  btnText: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#FFBF00"
  },
  text: {
    height: "100%",
    width: "100%",
    minWidth: "150px",
    minHeight: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #800020",
    backgroundColor: "#AA336A",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
