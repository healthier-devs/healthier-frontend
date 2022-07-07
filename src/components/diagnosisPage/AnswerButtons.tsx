import styled from "styled-components";
import { IAnswerButtonProps } from "../../interfaces/diagnosisPage";
import RoundButton from "../buttons/RoundButton";
import theme from "../../lib/theme";
import { Body_1 } from "../../lib/fontStyle";

const Container = styled.section``;
const AnswersContainer = styled.section<{ ansCount: number }>`
  margin-top: ${({ ansCount }) =>
    ansCount === 4 ? 6.6 : ansCount === 2 ? 13 : 0}rem;
`;
const ButtonBox = styled.section`
  width: calc(100% - 4rem);

  & + & {
    margin-top: 1.2rem;
  }
`;
const Button = styled(Body_1)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - 4rem);
  height: 5.2rem;
  padding: 0.2rem 2.3rem;

  background-color: ${({ selected, theme }) =>
    selected ? theme.color.sub_blue : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.color.blue : theme.color.grey_300};

  border: ${({ selected, theme }) =>
    selected ? "none" : "0.1rem solid " + theme.color.grey_650};
  border-radius: 3rem;
  box-sizing: border-box;

  font-weight: 200;
  text-align: center;
`;
const NextButton = styled.section`
  position: fixed;
  bottom: 3rem;

  width: calc(100vw - 4rem);
`;

const AnswerButtons = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
  handleNext,
  isMultiple,
  sleepScore,
  setSleepScore,
}: IAnswerButtonProps) => {
  const handleSelect = (idx: number) => {
    let filtered = selectedAnswer.filter(
      (ans) => ans.a_id !== answers[idx].a_id
    );
    if (filtered.length !== selectedAnswer.length) {
      setSelectedAnswer(filtered);
    } else {
      setSelectedAnswer([...selectedAnswer, answers[idx]]);

      if (answers[idx]?.score) {
        setSleepScore(sleepScore + (answers[idx].score || 0));
      }
    }
    if (!isMultiple) {
      handleNext();
    }
  };
  const handleActive = (id: number): boolean => {
    let idx = selectedAnswer.findIndex((ans) => ans.a_id === id);
    if (idx !== -1) return true;
    return false;
  };

  return (
    <Container>
      <AnswersContainer ansCount={answers.length}>
        {answers.map((ans, idx) => (
          <ButtonBox key={idx} onClick={() => handleSelect(idx)}>
            <Button selected={handleActive(ans.a_id)}>{ans.answer}</Button>
          </ButtonBox>
        ))}
      </AnswersContainer>
      {isMultiple && (
        <NextButton onClick={handleNext}>
          <RoundButton
            outline="none"
            backgroundColor={
              selectedAnswer.length === 0
                ? theme.color.grey_650
                : theme.color.blue
            }
            color={
              selectedAnswer.length === 0
                ? theme.color.grey_400
                : theme.color.grey_100
            }
            text="다음 단계"
          />
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
