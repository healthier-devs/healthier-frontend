import * as Styled from "./index.style";

const ChallengeNotification = () => {
  return (
    <Styled.Container>
      <div className="mainTitle">꼭 확인해주세요!</div>
      <ul>
        <li className="subTitle">당일 촬영한 사진, 기본카메라로 찍은 사진만 인정돼요.(사진 검수 진행)</li>
        <li className="subTitle">당일 촬영한 사진이 아닐 경우 자동으로 인증 실패로 기록돼요.</li>
        <li className="subTitle">00:00~23:59 안에 업로드를 해야 당일 인증건으로 인정돼요.</li>
        <li className="subTitle">사진 검수는 약 3시간 정도 소요돼요.</li>
        <li className="subTitle">하루당 인증 기회는 한번 뿐이에요.</li>
        <li className="subTitle">인증 실패시, 친구 초대(초대한 친구가 회원가입을 해야함)로 만회할 수 있는 티켓을 획득할 수 있어요.</li>
        <li className="subTitle">1인당 참여가능한 최대 챌린지 개수는 3개예요.</li>
        <li className="subTitle">리워드를 획득하면 선물함 {">"} 리워드에서 확인 가능해요.</li>
        <li className="subTitle">티켓을 획득하면 선물함 {">"} 티켓에서 확인 가능해요.</li>
        <li className="subTitle">기타 챌린지 또는 인증에 대한 문의는 1:1 고객센터로 문의주세요.</li>
      </ul>
    </Styled.Container>
  );
};

export default ChallengeNotification;
