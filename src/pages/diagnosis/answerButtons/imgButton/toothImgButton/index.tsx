import ImageMap from "image-map";
import { useEffect, useState } from "react";
import ToothBottom from "src/assets/images/ToothBottom.png";
import ToothBottomLeft from "src/assets/images/ToothBottomLeft.png";
import ToothBottomRight from "src/assets/images/ToothBottomRight.png";
import ToothDefault from "src/assets/images/ToothDefault.png";
import ToothTop from "src/assets/images/ToothTop.png";
import ToothTopLeft from "src/assets/images/ToothTopLeft.png";
import ToothTopRight from "src/assets/images/ToothTopRight.png";
import { TOOTH_PART } from "src/data/answer_type";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

type TToothPart = keyof typeof TOOTH_PART;

function ToothImgButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [toothPart, setToothPart] = useState<TToothPart>();

  const handleClickToothPartButton = (e: React.MouseEvent<HTMLAreaElement, MouseEvent>) => {
    e.preventDefault();

    const [, part] = e.currentTarget.id.split("_");

    setToothPart(part as TToothPart);
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [TOOTH_PART[part as TToothPart]] }));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      ImageMap("img[usemap]");
    }, 500);

    [ToothBottom, ToothBottomLeft, ToothBottomRight, ToothDefault, ToothTop, ToothTopLeft, ToothTopRight].forEach((image) => {
      new Image().src = image;
    });

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Styled.Container>
      <Styled.ToothPartImg
        loading="eager"
        src={
          toothPart === undefined
            ? ToothDefault
            : toothPart === "top"
            ? ToothTop
            : toothPart === "top-right"
            ? ToothTopRight
            : toothPart === "top-left"
            ? ToothTopLeft
            : toothPart === "bottom-right"
            ? ToothBottomRight
            : toothPart === "bottom"
            ? ToothBottom
            : ToothBottomLeft
        }
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          id="ToothPartButton_top"
          href=""
          coords="182,188,228,232,298,190,403,233,449,188,364,126,267,124"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          href=""
          id="ToothPartButton_top-left"
          coords="403,237,464,202,498,253,530,330,544,424,547,483,468,483,466,417,428,278"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom-left"
          href=""
          coords="463,494,549,496,538,589,521,672,484,723,437,770,394,733,430,679,460,617"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom"
          href=""
          coords="385,736,423,777,334,830,247,806,209,772,246,740,289,760,325,768,360,752"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom-right"
          href=""
          coords="86,495,92,598,127,704,195,770,241,731,208,694,178,629,165,579,165,529,163,488"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_top-right"
          href=""
          coords="78,477,87,385,107,309,137,261,178,198,228,238,185,320,178,345,164,404,163,453,155,482"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
      </map>
      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Styled.Container>
  );
}

export default ToothImgButton;
