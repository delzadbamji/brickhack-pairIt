import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Image from "../components/Image";
import { questionList } from "../constants/constants";
import SequenceContext from "../utils/SequenceContext";

function QuizPage() {
  const [sequence, setContext] = useContext(SequenceContext);

  /**
   * @param {*} number denotes the buttonNumber of the selected item in the list of questions
   * @returns the choice available for each button
   */
  const getOptions = (number) => {
    const itemNumber = sequence[0];
    return questionList[itemNumber].answers[number].content;
  };

  /**
   * @param {*} number denotes the buttonNumber of the selected item in the list of questions
   * @returns the image url for each choice
   */
  const getImage = (number) => {
    const itemNumber = sequence[0];
    return questionList[itemNumber].answers[number].image;
  };

  const getQ = () => {
    const itemNumber = sequence[0];
    return questionList[itemNumber].question;
  };

  const [optionOne, setOne] = useState(getOptions(0));
  const [optionTwo, setTwo] = useState(getOptions(1));
  const [optionThree, setThree] = useState(getOptions(2));

  const [q, setQuestion] = useState(getQ());

  const [ImageOne, setImageOne] = useState(getImage(0));
  const [ImageTwo, setImageTwo] = useState(getImage(1));
  const [ImageThree, setImageThree] = useState(getImage(2));

  /** This function updates the quiz page's components.
   *
   * @param {*} index denotes the current question number and it is incremented each time.
   */
  const updateOption = (index) => {
    const itemNumber = sequence[index];
    setOne(questionList[itemNumber]?.answers[0]?.content);
    setTwo(questionList[itemNumber]?.answers[1]?.content);
    setThree(questionList[itemNumber]?.answers[2]?.content);

    setImageOne(questionList[itemNumber]?.answers[0]?.image);
    setImageTwo(questionList[itemNumber]?.answers[1]?.image);
    setImageThree(questionList[itemNumber]?.answers[2]?.image);

    setQuestion(questionList[itemNumber]?.question);
  };

  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  // This function handles all the onclick activities on this page.
  const handleOnClick = () => {
    if (index === 7) {
      navigate("/results");
    }
    updateOption(index);
    setIndex(index + 1);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>{q}</div>
      </div>

      <div style={styles.row}>
        <Image source={ImageOne} />
        <Image source={ImageTwo} />
        <Image source={ImageThree} />
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
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    background: "antiquewhite",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px"
  },
  header: {
    fontSize: "60px",
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
