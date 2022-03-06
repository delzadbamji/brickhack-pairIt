import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LandingButton from "../components/LandingButton";
import Header from "../components/Header";
import SequenceContext from "../utils/SequenceContext";
import { getQuestions } from "../utils/helpers";
import { alcohols, foods } from "../constants/constants";
import Image from "../components/Image";

function Results() {
  const navigate = useNavigate();
  const [sequence, setContext] = useContext(SequenceContext);
  const [number, setNumber] = useState(0);
  const handleOnClick = () => {
    setContext(getQuestions());
    navigate("/");
  };

  useEffect(() => {
    handleResults();
  }, []);
  const handleResults = () => {
    let res = Math.abs(Math.floor(Math.random() * (alcohols.length - 1)));
    if (res === 4 || res === 3) {
      res = 5;
    }
    setNumber(res);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <Header Content={"Viola! We've computed the best match for YOU:"} />
        <div style={styles.row}>
          <div style={styles.col}>
            <Image source={alcohols[number]?.image} />
            <h3>{alcohols[number]?.alc}</h3>
          </div>
          <div style={styles.col}>
            <Image source={foods[number]?.image}></Image>
            <h3>{foods[number]?.food}</h3>
          </div>
        </div>

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
    borderRadius: "4px"
  },
  startText: {
    fontSize: "26px",
    fontWeight: "800"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "30px"
  },
  col: {
    display: "flex",
    flexDirection: "Column",
    gap: "10px"
  }
};
export default Results;
