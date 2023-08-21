import ContentHeader from "src/components/contentHeader";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import ChallengeDescription from "./challenge-description";
import * as Styled from "./index.style";

function ChallengeDetail() {
  const handleClickParticipateButton = () => {
    alert("TODO: 참여하기 페이지");
  };

  return (
    <>
      <ContentHeader back={true} exit={false} borderBottom={false} />
      <Styled.Container>
        <Styled.Image src="https://images.unsplash.com/photo-1607077792448-17b60bcca65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80">
          <Styled.ImageShadow />
        </Styled.Image>

        <Styled.Section>
          <FlexBox flexDirection="column" mt="4rem" mb="3.2rem" alignItems="center">
            <Styled.Typography>
              <span className="highlight">34명</span>이 참여하고 있어요!
            </Styled.Typography>

            <Styled.Title>매일 아침 공복에 유산균 먹기</Styled.Title>

            <FlexBox flexDirection="row" gap="1rem">
              <Styled.Chip variant="primary">매일 인증</Styled.Chip>
              <Styled.Chip variant="primary">28일 동안</Styled.Chip>
              <Styled.Chip variant="primary">사진 인증</Styled.Chip>
            </FlexBox>
          </FlexBox>

          <FlexBox flexDirection="column" gap="1.2rem" mt="3.2rem" mb="1.6rem">
            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Midterm 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                3천원 상품권
              </Styled.Typography>
            </FlexBox>

            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Final 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                5천원 상품권
              </Styled.Typography>
            </FlexBox>
          </FlexBox>

          <Styled.Typography fontSize="1.2rem" color="500" mb="2.4rem">
            상품권 제휴사는 전국 5대 편의점 (CU, GS25, 7-Eleven, Ministop, emart24)/교보문고/CGV/다이소/네이버페이 중 선택 가능합니다.
          </Styled.Typography>

          <Styled.Button onClick={handleClickParticipateButton}>참여하기</Styled.Button>
        </Styled.Section>

        <Divider />

        <Styled.Section>
          <ChallengeDescription highlight="WHAT : " title="무엇을 하는 챌린지인가요?">
            <Styled.Typography color="300" lineHeight="150%">
              매일 아침에 일어나자마자 공복상태로 유산균을 복용하는 챌린지예요.
            </Styled.Typography>
          </ChallengeDescription>

          <ChallengeDescription highlight="WHY : " title="왜 이 챌린지를 해야하나요?">
            <Styled.Typography color="300" lineHeight="150%">
              장내 미생물은 인간의 몸속에 공존하면서 생체대사 조절과 소화능력, 그리고 각종 질병의 조절 등에 영향을 미쳐요. 유산균 제제는
              장내 미생물의 균형을 유지하고 유익한 미생물을 증식시켜요.
            </Styled.Typography>
          </ChallengeDescription>

          <ChallengeDescription highlight="TIP : " title="언제 먹는 것이 좋나요?">
            <Styled.Typography color="300" lineHeight="150%">
              아침 공복에 먹는 것이 좋아요. 공복에 먹어야 위산이 나와 유산균 제제의 활성이 떨어지는 것을 막을 수 있어요. 만약 공복에 먹는
              것을 깜빡 잊었다면 위산 분비가 적은 식후 30분 이후에 먹는 것이 좋아요.
            </Styled.Typography>
          </ChallengeDescription>
        </Styled.Section>
      </Styled.Container>
    </>
  );
}

export default ChallengeDetail;
