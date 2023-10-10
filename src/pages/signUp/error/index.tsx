import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import FlexBox from "src/components/flexBox";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

function SignUpError() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reason = searchParams.get("r");

  useEffect(() => {
    if (!reason || (reason !== "banned" && reason !== "deleted")) {
      navigate("/");
    }
  }, [reason, navigate]);

  return (
    <>
      <ContentHeader back={false} exit={true} exitCallback={() => navigate("/signup/step1")} />
      <FlexBox flexDirection="column" alignItems="center" style={Styled.containerStyle}>
        <Styled.TitleWrapper>
          <Styled.Title>
            {reason === "banned" ? (
              <>
                현재 <span className="bold">회원가입이 불가</span>해요
              </>
            ) : (
              <>
                <span className="bold">탈퇴 14일 후</span>
                {"\n"}
                다시 가입할 수 있어요
              </>
            )}
          </Styled.Title>
        </Styled.TitleWrapper>
        <Styled.SubTitleWrapper>
          <Styled.SubTitle>
            {reason === "banned" ? (
              <>
                {"관리자에 의해 회원가입 제한되었습니다.\n문의 사항은 헬시어 고객센터인\n"}
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:be@healthier.bio";
                  }}
                  className="email"
                >
                  be@healthier.bio
                </Link>
                로 알려주세요.
              </>
            ) : (
              <>헬시어 재가입은 탈퇴 14일 이후에 가능해요.{"\n"}14일 후에 회원가입을 다시 시도해주세요.</>
            )}
          </Styled.SubTitle>
        </Styled.SubTitleWrapper>
        <Styled.ImageWrapper>
          <img className="illustration" src="/images/empty.png" />
        </Styled.ImageWrapper>
      </FlexBox>
      <Styled.ConfirmButtonWrapper onClick={() => navigate("/")}>
        <RoundButton>확인</RoundButton>
      </Styled.ConfirmButtonWrapper>
    </>
  );
}

export default SignUpError;
