import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

function RewardReception() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isCheckAgreement, setIsCheckAgreement] = useState<boolean>(false);

  useEffect(() => {
    if (!state) {
      navigate("/challenge/reward");
    }
  }, []);

  const handleContinue = () => {
    if (isCheckAgreement) {
      navigate("/challenge/reward/information", { state: { userRewardId: state.userRewardId, rewardId: state.item.rewardId } });
    }
  };

  return (
    <>
      <ContentHeader
        back={true}
        exit={true}
        label="리워드 받기"
        style={{ backgroundColor: theme.color.grey_900 }}
        exitCallback={() => navigate("/")}
      />
      <Styled.Container>
        <Styled.RewardImageContainer>
          <Styled.RewardImage src={state.item.imageUrl} />
        </Styled.RewardImageContainer>

        <Styled.ContentContainer>
          <Styled.Title>{state.item.type}</Styled.Title>
          <Styled.Point style={{ marginTop: "0.6rem" }}>{state.item.name}</Styled.Point>

          <Styled.Line />

          <Styled.CheckBoxContainer>
            <img
              src={`/images/informationPage/check-${isCheckAgreement ? "" : "in"}active.svg`}
              onClick={() => setIsCheckAgreement((prev) => !prev)}
            />
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
              <Styled.DescriptionText style={{ marginLeft: "1rem" }} onClick={() => setIsCheckAgreement((prev) => !prev)}>
                회원 이용약관에 동의 합니다 (필수)
              </Styled.DescriptionText>
              <Styled.DetailText style={{ textDecoration: "underline" }}>내용보기</Styled.DetailText>
            </div>
          </Styled.CheckBoxContainer>

          <Styled.Line />

          <Styled.DescriptionBox>
            <Styled.DescriptionText style={{ color: theme.color.grey_300 }}>유효기간</Styled.DescriptionText>
            <Styled.DottedLine />
            <Styled.DetailText>{state.item.duration}일</Styled.DetailText>
          </Styled.DescriptionBox>
          <Styled.DescriptionBox>
            <Styled.DescriptionText style={{ color: theme.color.grey_300 }}>상품권 이용 유의사항</Styled.DescriptionText>
            <Styled.DottedLine />
            <Styled.DetailText style={{ textDecoration: "underline" }}>내용보기</Styled.DetailText>
          </Styled.DescriptionBox>
          <Styled.DescriptionBox>
            <Styled.DescriptionText style={{ color: theme.color.grey_300 }}>리워드 지급 유의사항</Styled.DescriptionText>
            <Styled.DottedLine />
            <Styled.DetailText style={{ textDecoration: "underline" }}>내용보기</Styled.DetailText>
          </Styled.DescriptionBox>
        </Styled.ContentContainer>

        <Styled.BottomCTA>
          <RoundButton
            backgroundColor={isCheckAgreement ? theme.color.blue : theme.color.grey_600}
            color={isCheckAgreement ? theme.color.grey_100 : theme.color.grey_500}
            onClick={handleContinue}
          >
            동의하고 계속하기
          </RoundButton>
        </Styled.BottomCTA>
      </Styled.Container>
    </>
  );
}

export default RewardReception;
