import { useEffect } from "react";
import { DIAGNOSE_IMAGE_PATH } from "src/data/symptom_type";
import { preloadImage } from "src/utils/image";
import styled from "styled-components";
import type { TDiagnoseCategory } from "src/interfaces/symptomPage";

interface IBody {
  category: TDiagnoseCategory | null;
}

function Body({ category }: IBody) {
  useEffect(() => {
    preloadImage([...Object.values(DIAGNOSE_IMAGE_PATH), "symptoms/default.png"]);
  }, []);

  return <Image src={category === null ? "images/symptom/default.png" : "images/" + DIAGNOSE_IMAGE_PATH[category]} />;
}

export default Body;

const Image = styled.img`
  width: 100%;
  box-sizing: border-box;

  margin-top: 36px;
`;
