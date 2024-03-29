import { useState, ChangeEvent } from "react";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../index.style";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

export function CountButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [count, setCount] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);

    setCount(number);

    if (number === 0) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [] });

      return;
    }
  };

  return (
    <RootContainer>
      <Styled.Container>
        <Styled.Input type="number" value={count || ""} placeholder="대략적인 횟수를 입력" onChange={handleInputChange} />
        <Styled.Text>번</Styled.Text>
      </Styled.Container>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </RootContainer>
  );
}
