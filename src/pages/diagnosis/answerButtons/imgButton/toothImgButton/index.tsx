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
          coords="271,243,343,293,398,247,447,231,532,242,586,285,602,299,664,237,592,164,516,129,410,135,331,174"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          href=""
          id="ToothPartButton_top-right"
          coords="668,241,601,304,627,357,658,402,682,468,701,557,698,632,703,673,819,669,801,450,731,309"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom-right"
          href=""
          coords="695,688,813,689,801,855,777,943,728,1016,647,1104,580,1050,647,956,691,824"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom"
          href=""
          coords="357,1049,453,1102,523,1085,576,1053,619,1090,618,1115,528,1181,420,1177,364,1148,314,1104"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_bottom-left"
          href=""
          coords="135,683,249,689,248,819,291,963,355,1045,297,1118,215,1025,155,926,127,753"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
        <area
          id="ToothPartButton_top-left"
          href=""
          coords="262,248,339,298,283,398,238,555,244,644,238,670,119,672,133,505,159,416,195,342"
          shape="poly"
          onClick={handleClickToothPartButton}
        />
      </map>
      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Styled.Container>
  );
}

export default ToothImgButton;
