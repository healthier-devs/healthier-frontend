import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EmptyImageSrc from "src/assets/images/empty.png";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";
import type { FallbackProps } from "react-error-boundary";

export default function Error({ resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const errorLocation = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== errorLocation.current) {
      resetErrorBoundary();
    }
  }, [location.pathname, resetErrorBoundary]);

  const handleClickRetryButton = () => {
    resetErrorBoundary();
  };

  const handleClickBackButton = () => {
    resetErrorBoundary();
    navigate(-1);
  };

  return (
    <>
      <ContentHeader back={true} backCallback={handleClickBackButton} exit={false} />

      <Styled.RootContainer padding="0">
        <Styled.Container>
          <Styled.Message>잠깐!{"\n"}에러가 발생했어요</Styled.Message>
          <Styled.EmptyImage src={EmptyImageSrc} />
          <Styled.ButtonWrapper>
            <RoundButton onClick={handleClickRetryButton} style={{ width: "100%" }}>
              다시 시도하기
            </RoundButton>
          </Styled.ButtonWrapper>
        </Styled.Container>
      </Styled.RootContainer>
    </>
  );
}
