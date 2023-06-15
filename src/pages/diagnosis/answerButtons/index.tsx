import { Dispatch, useEffect } from "react";
import RoundButton from "src/components/roundButton";
import { ANSWER_TYPE } from "src/data/answer_type";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import theme from "src/lib/theme";
import DefButton from "../defButton";
import EtcButton from "../etcButton";
import NumberButtons from "../numberButtons";
import SliderButton from "../sliderButton";
import StringButton from "../stringButton";
import { Container, NextButton } from "./index.style";

interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  useEffect(() => {
    selectedAnswer.sort((a, b) => a.answer_id - b.answer_id);
    if (question.answers && !question.is_multiple && selectedAnswer.length !== 0 && question.answer_type !== "DRAG_1") {
      const timer = setTimeout(() => {
        handleNext();
        clearTimeout(timer);
      }, 300);
    }
  }, [selectedAnswer]);

  const handleActive = (id: number): boolean => {
    return selectedAnswer.findIndex((ans) => ans.answer_id === id) !== -1;
  };

  const handleMultipleAnswer = () => {
    if (selectedAnswer.length === 0) {
      return;
    }

    handleNext();
  };

  if (question.answer_type.startsWith("NUMBER")) {
    return (
      <NumberButtons question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleNext={handleNext} />
    );
  } else if (question.answer_type === ANSWER_TYPE.DRAG_1) {
    return (
      <SliderButton
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleNext={handleNext}
        handleActive={handleActive}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.STR) {
    return <StringButton selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleNext={handleNext} />;
  } else if (question.answer_type === ANSWER_TYPE.ETC) {
    return (
      <EtcButton
        answers={question.answers as IAnswer[]}
        selectedAnswer={selectedAnswer}
        question={question}
        handleActive={handleActive}
        setSelectedAnswer={setSelectedAnswer}
      />
    );
  }

  return (
    <Container>
      <DefButton
        answers={question.answers ?? []}
        question={question}
        selectedAnswer={selectedAnswer}
        handleActive={handleActive}
        setSelectedAnswer={setSelectedAnswer}
      />
      {question.is_multiple && (
        <NextButton onClick={handleMultipleAnswer}>
          <RoundButton
            outline="none"
            backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
            color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
          >
            다음 단계
          </RoundButton>
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
