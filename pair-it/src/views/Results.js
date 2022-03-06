import React, { useContext } from "react";
import { useNavigate } from "react-router";
import LandingButton from "../components/LandingButton";
import Header from "../components/Header";
import SequenceContext from "../utils/SequenceContext";
import { getQuestions } from "../utils/helpers";

function Results() {
  const navigate = useNavigate();
  const [sequence, setContext] = useContext(SequenceContext);

  const handleOnClick = () => {
    setContext(getQuestions());
    navigate("/");
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <Header Content={"Viola! We've computed the best match for YOU:"} />
        <LandingButton Content={"Try Again?"} onClick={handleOnClick} />
      </div>
    </div>
  );
}
const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    background: "antiquewhite",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px"
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

    borderRadius: "4px"
  },
  startText: {
    fontSize: "26px",
    fontWeight: "800"
  }
};
export default Results;
