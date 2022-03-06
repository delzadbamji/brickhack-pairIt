import { questionList } from "../constants/constants";

export const getQuestions = () => {
  let ques = [];
  let i = 0;
  while (i < 7) {
    const randomNumber = Math.abs(
      Math.floor(Math.random() * questionList.length - 1)
    );
    if (!ques.includes(randomNumber)) {
      ques.push(randomNumber);
      i += 1;
    }
  }
  return ques;
};

//   const getOptionTwo = () => {
//     const itemNumber = sequence[0];
//     return questionList[itemNumber].answers[1].content;
//   };
//   const updateOptionTwo = (index) => {
//     const itemNumber = sequence[index];
//     setTwo(questionList[itemNumber].answers[1].content);
//   };
//   const [optionTwo, setTwo] = useState(getOptionTwo());

//   const getOptionThree = () => {
//     const itemNumber = sequence[0];
//     return questionList[itemNumber].answers[2].content;
//   };
//   const updateOptionThree = (index) => {
//     const itemNumber = sequence[index];
//     setThree(questionList[itemNumber].answers[2].content);
//   };
//   const [optionThree, setThree] = useState(getOptionThree());
