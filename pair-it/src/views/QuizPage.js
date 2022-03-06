import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Image from "../components/Image";
import { questionList } from "../constants/constants";
function QuizPage() {
  //   const getQuestions = () => {
  //     let ques = [];
  //     for (let i = 0; i < 7; i++) {
  //       const randomNumber = Math.floor(Math.random() * questionList.length - 1);
  //       ques.append(randomNumber);
  //     }
  //     setIndex(index + 1);
  //     setOne(ques[0].answers[0].content);
  //     return ques;
  //   };

  //   const navigate = useNavigate();
  //   const [questions, setQuestions] = useState(getQuestions());
  //   const [index, setIndex] = useState(0);
  //   const [optionOne, setOne] = useState("");
  //   const [optionTwo, setTwo] = useState("");
  //   const [optionThree, setThree] = useState("");

  //   const handleOnClick = () => {
  //     if (index === 7) {
  //       navigate("/result");
  //     }
  //     const newValues = questions[index].answers;
  //     setOne(newValues[0].content);
  //     setTwo(newValues[1].content);
  //     setThree(newValues[2].content);
  //     setIndex(index + 1);
  //   };
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
        <Button name={"poop"} />
        <Button name={"here"} />
        <Button name={"porn"} />
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
