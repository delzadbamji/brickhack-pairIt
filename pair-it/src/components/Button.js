import React from "react";
export default function Button(props) {
  return (
    <div style={styles.btn}>
      <div style={styles.btnText}>Yes</div>
    </div>
  );
}
const styles = {
  btn: {
    height: "60px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D94646",
    backgroundColor: "#D9464612",
    borderRadius: "10px",
  },
  btnText: {
    fontSize: "14px",
    fontWeight: "400",
  },
};
