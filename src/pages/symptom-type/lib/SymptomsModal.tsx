import FlexBox from "src/components/flexBox";
import styled from "styled-components";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface ISymptomModal {
  handleClickBackdrop: () => void;
  handleClickSymptom: (s: TSymptomType) => void;
  selectedSymptom: TSymptomType | null;
  symptoms: TSymptomType[];
}

function SymptomsModal({ symptoms, selectedSymptom, handleClickSymptom, handleClickBackdrop }: ISymptomModal) {
  return (
    <Container onClick={handleClickBackdrop}>
      <FlexBox flexDirection="row" flexWrap="wrap" gap="12px" justifyContent="space-between" style={{ width: "100%" }}>
        {symptoms.map((symptom) => (
          <Button
            key={symptom.engName}
            isMultiColumn={symptoms.length > 2}
            className={symptom.engName === selectedSymptom?.engName ? "button__selected" : "button__unselected"}
            onClick={(e) => {
              e.stopPropagation();
              handleClickSymptom(symptom);
            }}
          >
            {symptom.korName}
          </Button>
        ))}
      </FlexBox>
    </Container>
  );
}

export default SymptomsModal;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: calc(176px + var(--header)) 20px 0 20px;
  box-sizing: border-box;

  z-index: 0;
`;

const Button = styled.button<{ isMultiColumn: boolean }>`
  flex-basis: ${({ isMultiColumn }) => (isMultiColumn ? "calc(50% - 6px)" : "100%")};

  padding: 14px 0;
  border-radius: 52px;
  border: 1px solid ${({ theme }) => theme.color.grey_650};

  font-size: 16px;
  line-height: 150%;

  &.button__unselected {
    background: rgba(212, 217, 255, 0.03);

    color: ${({ theme }) => theme.color.grey_300};
    font-weight: 200;
  }

  &.button__selected {
    background: ${({ theme }) => theme.color.sub_blue};

    color: ${({ theme }) => theme.color.blue};
    font-weight: 300;
  }
`;
