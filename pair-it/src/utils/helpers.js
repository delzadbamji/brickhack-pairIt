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
