import React from "react";
import { useNavigate } from "react-router";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          Personality test to pair the right snack to your drink.
        </div>
        <div
          style={styles.start}
          onClick={() => {
            navigate("/quiz");
          }}
        >
          <div style={styles.startText}>PLAY</div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "800",
  },
  start: {
    height: "60px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D94646",
    backgroundColor: "#D14B32",
    // #D14B32
    // boxShadow: "inset -10px 10px 0.4em pink",

    borderRadius: "4px",
  },
  startText: {
    fontSize: "26px",
    fontWeight: "800",
  },
};
export default LandingPage;
