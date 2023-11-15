import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import XIcon from "src/assets/icons/XIcon";
import symptomElseSrc from "src/assets/images/SymptomElse.png";
import symptomMeSrc from "src/assets/images/SymptomMe.png";
import { useGetHealthInformation } from "src/hooks/mypage/useGetHealthInformation";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

const SymptomOnboard = () => {
  const { healthInformationData } = useGetHealthInformation();
  const navigate = useNavigate();

  const handleClickMe = () => {
    const hData = healthInformationData;

    if (hData) {
      if (
        hData.drinkingAmount === "마시지 않음" &&
        hData.continuousMedicines.length === 0 &&
        hData.medicines.length === 0 &&
        hData.prevSurgery.length === 0 &&
        hData.smokingAmount.smoking === false &&
        hData.underlyingDiseases.length === 0
      ) {
        navigate("/collect-symptom");
        // navigate('')
      } else {
        navigate("/symptom-type");
      }
    }
    // navigate("/symptom-type");
  };

  return (
    <Styled.Wrapper>
      <Styled.TopNavigation>
        <XIcon stroke={theme.color.grey_300} />
      </Styled.TopNavigation>
      <Styled.Container>
        <div className="mainText">누구의 증상을 감별하나요?</div>
        <div className="subText">
          더 정확한 증상 감별을 위해 <br />
          증상을 감별하는 사람을 알려주세요
        </div>

        <Styled.CardArea>
          <div onClick={handleClickMe}>
            <img src={symptomMeSrc} alt="me icon" />
            <span>제 증상을 확인할래요</span>
            <ChevronRightIcon width={36} height={36} stroke={theme.color.grey_500} />
          </div>
          <div onClick={() => navigate("/symptom-type")}>
            <img src={symptomElseSrc} alt="Else icon" />
            <span>다른 사람의 증상을 확인할래요</span>
            <ChevronRightIcon width={36} height={36} stroke={theme.color.grey_500} />
          </div>
        </Styled.CardArea>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default SymptomOnboard;
