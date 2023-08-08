import Slider from "@mui/material/Slider";
import { useEffect } from "react";
import { SLIDER_BUTTON_ANSWERS, SLIDER_VALUES } from "src/data/answer_type";
import theme from "src/lib/theme";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface ISliderButtonProps extends IAnswerButtonProps {
  handleActive: (id: string) => boolean;
}

const SliderButton = ({ setSelectedAnswer, handleClickNextButton, handleActive, isNextButtonEnabled }: ISliderButtonProps) => {
  const handleChangeAnswer = (selectedIdx: number) => {
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [SLIDER_BUTTON_ANSWERS[5 - selectedIdx].answer_id] }));
  };

  useEffect(() => {
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [SLIDER_BUTTON_ANSWERS[5 - SLIDER_VALUES.DEFAULT].answer_id] }));
  }, [setSelectedAnswer]);

  return (
    <Container
      style={{
        marginBottom: 0,
        paddingBottom: "13rem",
        height: "100%",
      }}
    >
      <Styled.SliderContainer>
        <Styled.MarkLabelContainer>
          {SLIDER_BUTTON_ANSWERS.map(({ answer, answer_id }) => (
            <Styled.MarkLabel key={answer_id} top={100 - Number(answer_id)} isSelected={handleActive(answer_id)}>
              <div className="slider-mark-label-wrapper">
                <span className="slider-mark-label">{answer}</span>
              </div>
              <Styled.Dash />
            </Styled.MarkLabel>
          ))}
        </Styled.MarkLabelContainer>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
            "&.MuiSlider-root": {
              width: "6px",
              borderRadius: "0",
              color: theme.color.blue,
              padding: "0rem 1.3rem 0 2rem",

              ".MuiSlider-rail": {
                opacity: "0.33",
              },

              ".MuiSlider-mark": {
                backgroundColor: "transparent",
              },

              ".MuiSlider-thumb": {
                width: "12px",
                height: "12px",
                transition: "none",
                "&::before": {
                  boxShadow: "0 0 0 16px rgba(183, 190, 255, 0.1)",
                },

                "&:hover": {
                  boxShadow: "none",
                },
              },
            },
          }}
          defaultValue={SLIDER_VALUES.DEFAULT}
          min={SLIDER_VALUES.MINIMUM}
          max={SLIDER_VALUES.MAXIMUM}
          step={SLIDER_VALUES.STEP}
          orientation="vertical"
          onChange={(_, newValue) => handleChangeAnswer(newValue as number)}
          marks
        />
        <Styled.NumbersContainer>
          {SLIDER_VALUES.LABELS.map((label) => (
            <div key={label}>
              <span className="slider-mark-number">{label}</span>
            </div>
          ))}
        </Styled.NumbersContainer>
      </Styled.SliderContainer>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Container>
  );
};

export default SliderButton;
