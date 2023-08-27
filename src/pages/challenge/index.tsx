import { useState } from "react";
import ContentHeader from "src/components/contentHeader";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

const categories = [
  { category: "영양제", image: "" },
  { category: "식습관", image: "" },
  { category: "수면", image: "" },
  { category: "운동", image: "" },
  { category: "영양제", image: "" },
  { category: "식습관", image: "" },
  { category: "수면", image: "" },
  { category: "운동", image: "" },
];

function Challenge() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <>
      <ContentHeader back={true} exit={false} label="건강 챌린지" />
      <Styled.Container>
        <Styled.Categories>
          {categories.map((medicine, idx) => (
            <Styled.Item key={medicine.category} isSelected={idx === selectedIdx} onClick={() => setSelectedIdx(idx)}>
              <Styled.ImgWrapper className="background">
                <Styled.Img className="img" src={medicine.image} alt="pill" />
              </Styled.ImgWrapper>

              <span className="label">{medicine.category}</span>
            </Styled.Item>
          ))}
        </Styled.Categories>

        <Styled.CardList>
          {Array.from(Array(5).keys()).map((val) => (
            <ChallengeCard key={val} />
          ))}
        </Styled.CardList>
      </Styled.Container>
    </>
  );
}

export default Challenge;
