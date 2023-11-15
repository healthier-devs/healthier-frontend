import { useEffect } from "react";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import { preloadImage } from "src/utils/image";
import styled, { css } from "styled-components";
import type { TDiagnoseCategory } from "src/interfaces/symptomPage";

interface IBody {
  category: TDiagnoseCategory | null;
  isBlurred: boolean;
}

function Body({ category, isBlurred }: IBody) {
  useEffect(() => {
    preloadImage([...Object.values(DIAGNOSE_TYPES).map(({ imagePath }) => imagePath), "symptoms/default.png"]);
  }, []);

  return (
    <Image isBlurred={isBlurred} src={category === null ? "images/symptom/default.png" : "images/" + DIAGNOSE_TYPES[category].imagePath} />
  );
}

export default Body;

const Image = styled.img<{ isBlurred: boolean }>`
  width: 100%;
  box-sizing: border-box;

  margin-top: 36px;
  ${({ isBlurred }) =>
    isBlurred &&
    css`
      filter: blur(10px);
      -webkit-filter: blur(10px);
    `}
`;
