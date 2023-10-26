import * as Styled from "../index.style";

function VersionInformation() {
  return (
    <Styled.Box>
      <Styled.Box mb="4px">
        <Styled.Typography className="title-2">버전 정보</Styled.Typography>
      </Styled.Box>
      <Styled.Typography className="description">최신 버전입니다 (ver1.1.0) </Styled.Typography>
    </Styled.Box>
  );
}

export default VersionInformation;
