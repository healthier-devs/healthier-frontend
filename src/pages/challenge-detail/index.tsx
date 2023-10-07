import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import { useGetChallengeById } from "src/hooks/challenge/useGetChallengeById";
import ChallengeDescription from "./challenge-description";
import ChallengeNotification from "./challenge-notification";
import * as Styled from "./index.style";

interface IQueryID {
  id?: string;
}

const highlightText = (line: string) => {
  const parts = line.split("^");

  return parts.map((part, pIndex) => {
    if (pIndex % 2 === 1) {
      return <Styled.Highlighted key={pIndex}>{part}</Styled.Highlighted>;
    } else {
      return part;
    }
  });
};

const processText = (text: string) => {
  console.log(text);
  const output: React.ReactNode[] = [];

  const sections = text.split("%");

  sections.forEach((section) => {
    if (section.includes("&")) {
      const listItems = section.split("&")[1].split("\n");
      const frame = (
        <Styled.Frame key={section} mb="1.2rem" px="1.6rem">
          {listItems.map((item, index) => (
            <Styled.FrameText key={index} color="200" lineHeight="180%" fontSize="1.4rem" fontWeight="200">
              {item.split("^").map((part, pIndex) => {
                if (pIndex % 2 === 1) {
                  return <Styled.Highlighted key={pIndex}>{part}</Styled.Highlighted>;
                } else {
                  return part;
                }
              })}
            </Styled.FrameText>
          ))}
        </Styled.Frame>
      );

      output.push(frame);
    } else {
      const lines = section.split("\n");
      const typography = (
        <Styled.Typography key={section} lineHeight="160%" color="300" mb="1.2rem">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {highlightText(line)}
              {index !== lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Styled.Typography>
      );

      output.push(typography);
    }
  });

  return output;
};

const ChallengeDetail = () => {
  const { id = "" }: IQueryID = useParams();
  const challengeID = Number(id);

  const { isLoading, challengeData } = useGetChallengeById(challengeID);
  const handleClickParticipateButton = () => {
    alert("TODO: 참여하기 페이지");
  };

  useEffect(() => {
    if (!isLoading) {
      console.log(challengeData);
    }
  }, [challengeData]);

  return isLoading ? (
    <>Loading</>
  ) : (
    <>
      <ContentHeader back={true} exit={false} borderBottom={false} />
      <Styled.Container>
        <Styled.Image
          src={`${
            challengeData.basicImage === "s3_url"
              ? "https://images.unsplash.com/photo-1607077792448-17b60bcca65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80"
              : challengeData.basicImage
          }`}
        >
          <Styled.ImageShadow />
        </Styled.Image>

        <Styled.Section>
          <FlexBox flexDirection="column" mt="4rem" mb="3.2rem" alignItems="center">
            <Styled.Typography>
              <span className="highlight">
                {challengeData.category === "SLEEP"
                  ? "수면"
                  : challengeData.category === "DIET"
                  ? "식습관"
                  : challengeData.category === "SUPPLEENT"
                  ? "영양제"
                  : "운동"}{" "}
                챌린지
              </span>
            </Styled.Typography>

            <Styled.Title>{challengeData.title}</Styled.Title>

            <FlexBox flexDirection="row" gap="1rem">
              <Styled.Chip variant="sub">{challengeData.times}</Styled.Chip>
              <Styled.Chip variant="sub">{challengeData.duration}</Styled.Chip>
              <Styled.Chip variant="sub">{challengeData.method}</Styled.Chip>
            </FlexBox>
          </FlexBox>

          <FlexBox flexDirection="column" gap="1.2rem" mt="3.2rem" mb="1.6rem">
            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Midterm 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                {challengeData.midtermGift / 1000}천원 상품권
              </Styled.Typography>
            </FlexBox>

            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Final 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                {challengeData.finalGift / 10000}만원 상품권
              </Styled.Typography>
            </FlexBox>
          </FlexBox>

          <Styled.Typography fontSize="1.2rem" color="500" mb="3.6rem">
            상품권 제휴사는 금액에 따라 상이하며, 네이버페이/백화점상품권/스타벅스/편의점(CU, GS25, 7-Eleven)/영화관람권 등이 있습니다.
          </Styled.Typography>

          {/* <Styled.Button onClick={handleClickParticipateButton}>참여하기</Styled.Button> */}
        </Styled.Section>

        <Divider />

        <Styled.Section>
          <ChallengeDescription highlight="WHAT : " title="무엇을 하는 챌린지인가요?">
            <Styled.Typography color="300" lineHeight="150%">
              {challengeData.whatContent}
            </Styled.Typography>
          </ChallengeDescription>
          <ChallengeDescription highlight="WHY : " title="왜 이 챌린지를 해야하나요?">
            {processText(challengeData.whyContent)}
          </ChallengeDescription>

          <ChallengeDescription highlight="TIP : " title={`${challengeData.tipSubtitle}`}>
            <Styled.Typography color="300" lineHeight="150%">
              {processText(challengeData.tipContent)}
            </Styled.Typography>
          </ChallengeDescription>
        </Styled.Section>
        <Styled.Section>
          <ChallengeDescription highlight="인증 가이드">
            <Styled.Typography color="200" lineHeight="150%" mb="12rem">
              {challengeData.guide}
            </Styled.Typography>
          </ChallengeDescription>
        </Styled.Section>
        <ChallengeNotification />
      </Styled.Container>
    </>
  );
};

export default ChallengeDetail;
