import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Image from "../components/Image";
import { questionList } from "../constants/constants";
import SequenceContext from "../utils/SequenceContext";

function QuizPage() {
  const sequence = useContext(SequenceContext);

  const getOptions = (number) => {
    const itemNumber = sequence[0];
    return questionList[itemNumber].answers[number].content;
  };

  const [optionOne, setOne] = useState(getOptions(0));
  const [optionTwo, setTwo] = useState(getOptions(1));
  const [optionThree, setThree] = useState(getOptions(2));
  const updateOption = (index) => {
    const itemNumber = sequence[index];
    setOne(questionList[itemNumber]?.answers[0]?.content);
    setTwo(questionList[itemNumber]?.answers[1]?.content);
    setThree(questionList[itemNumber]?.answers[2]?.content);
  };

  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  const handleOnClick = () => {
    if (index === 7) {
      navigate("/results");
    }
    updateOption(index);
    setIndex(index + 1);
  };
  return (
    <div style={styles.outerContainer}>
      <div style={styles.header}>
        Personality test to pair the right snack to your drink.
      </div>
      <div style={styles.row}>
        <Image />
        <Image />
        <Image />
      </div>
      <div style={styles.buttonRow}>
        <Button
          name={optionOne}
          onClick={() => {
            handleOnClick();
          }}
        />
        <Button
          name={optionTwo}
          onClick={() => {
            handleOnClick();
          }}
        />
        <Button
          name={optionThree}
          onClick={() => {
            handleOnClick();
          }}
        />
      </div>
    </div>
  );
}
const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px",
    height: "100vh"
  },
  header: {
    fontSize: "20px",
    fontWeight: "800"
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
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    gap: "40px"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "40px"
  }
};
export default QuizPage;
