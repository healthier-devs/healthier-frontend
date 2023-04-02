import { IAnswerButtonProps } from "src/interfaces/diagnosisPage";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { ChangeEvent, useEffect } from "react";
import { saveAnswer } from "src/state/answerSlice";
import { useAppDispatch } from "src/state";
import {
  Container,
  AnswersContainer,
  ButtonBox,
  ButtonText,
  NextButton,
  RangeAnswerContainer,
  RangeContainer,
  RangeInput,
  RangeAnswers,
  RangeAnswer,
} from "./index.style";

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const answers = question.answers;
  const isMultiple = question.is_multiple === 1;
  const isSliderQuestion = question.question.includes("통증의 정도");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isMultiple && !isSliderQuestion && selectedAnswer.length !== 0) {
      const timer = setTimeout(() => {
        handleNext();
        clearTimeout(timer);
      }, 300);
    }
  }, [selectedAnswer]);

  const handleSelect = (id: number) => {
    if (isMultiple) {
      const filtered = selectedAnswer.filter((ans) => ans.answer_id !== id);

      if (filtered.length !== selectedAnswer.length) {
        setSelectedAnswer(filtered);
      } else {
        const filtered_idx = answers.findIndex((ans) => ans.answer_id === id);
        setSelectedAnswer([...selectedAnswer, answers[filtered_idx]]);
      }
    } else {
      const filtered_idx = answers.findIndex((ans) => ans.answer_id === id);
      setSelectedAnswer([answers[filtered_idx]]);
      dispatch(
        saveAnswer({
          question_id: question.id,
          answer_id: [answers[filtered_idx].answer_id],
        })
      );
    }
  };
  const handleActive = (id: number): boolean => {
    return selectedAnswer.findIndex((ans) => ans.answer_id === id) !== -1;
  };
  const handleMultipleAnswer = () => {
    if (selectedAnswer.length === 0) return;

    dispatch(
      saveAnswer({
        question_id: question.id,
        answer_id: selectedAnswer.map((ans) => ans.answer_id),
      })
    );

    handleNext();
  };
  const handleRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedIdx = Number(e.target.value);
    setSelectedAnswer([{ answer_id: question.answers[selectedIdx].answer_id, answer: question.answers[selectedIdx].answer }]);
  };

  useEffect(() => {
    selectedAnswer.sort((a, b) => a.answer_id - b.answer_id);
  }, [selectedAnswer]);

  return (
    <Container>
      {isSliderQuestion ? (
        <RangeAnswerContainer>
          <RangeAnswers>
            {answers.length !== 0 &&
              answers.map((ans, idx) => (
                <RangeAnswer key={idx} onClick={() => handleSelect(ans.answer_id)} selected={handleActive(ans.answer_id)}>
                  {ans.answer}
                </RangeAnswer>
              ))}
          </RangeAnswers>
          <RangeContainer>
            <RangeInput type="range" min={0} max={5} onChange={handleRangeInput} />
          </RangeContainer>
        </RangeAnswerContainer>
      ) : (
        <AnswersContainer ansCount={answers.length}>
          {answers.length !== 0 &&
            answers.map((ans, idx) => (
              <ButtonBox key={idx} onClick={() => handleSelect(ans.answer_id)} selected={handleActive(ans.answer_id)}>
                <section className="button">
                  <ButtonText>{ans.answer}</ButtonText>
                </section>
              </ButtonBox>
            ))}
        </AnswersContainer>
      )}

      {(isMultiple || isSliderQuestion) && (
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
