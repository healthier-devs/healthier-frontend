import { useState, useEffect } from "react";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { validateNumber } from "src/utils/inputUtils";
import { Container } from "../../index.style";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface ISmokingAnswer {
  year: number;
  count: number;
}

export function SmockingButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [smokingAnswer, setSmokingAnswer] = useState<ISmokingAnswer>({
    year: 0,
    count: 0,
  });

  const handleChangeSmoking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = validateNumber(value);

    setSmokingAnswer({ ...smokingAnswer, [name]: parsedValue });
  };

  useEffect(() => {
    if (smokingAnswer.year === 0 || smokingAnswer.count === 0) {
      setSelectedAnswer((sa) => ({ ...sa, answer_id: [] }));

      return;
    }

    setSelectedAnswer((sa) => ({ ...sa, answer_id: [`하루 ${smokingAnswer.count} 갑, ${smokingAnswer.year} 년 동안`] }));
  }, [setSelectedAnswer, smokingAnswer]);

  return (
    <Container>
      <Styled.InputsContainer>
        <Styled.InputContainer>
          <Styled.InputWrapper>
            <TextFieldOutlined value={smokingAnswer.year || ""} onChange={handleChangeSmoking} placeholder="횟수 입력" name="year" />
          </Styled.InputWrapper>
          <Styled.Text>년동안</Styled.Text>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Text>하루</Styled.Text>
          <Styled.InputWrapper>
            <TextFieldOutlined value={smokingAnswer.count || ""} onChange={handleChangeSmoking} placeholder="횟수 입력" name="count" />
          </Styled.InputWrapper>
          <Styled.Text>번 피웠어요</Styled.Text>
        </Styled.InputContainer>
      </Styled.InputsContainer>
      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Container>
  );
}
