import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import TextFieldStandard from "src/components/textFieldStandard";
import theme from "src/lib/theme";
import * as Styled from "./index.style";
import RewardFinish from "./rewardFinish";

function RewardInformation() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState<boolean>(false);
  const [isFinishReward, setIsFinishReward] = useState<boolean>(false);
  // TODO: 리워드 받기 후 isFinishReward 토글

  const isValidPhoneNumber = (input: string) => {
    const phoneNumberPattern = /^(\d{3}-\d{4}-\d{4})$/;

    return phoneNumberPattern.test(input);
  };

  return (
    <>
      {isFinishReward ? (
        <RewardFinish />
      ) : (
        <>
          <ContentHeader
            back={true}
            exit={true}
            label="정보 입력"
            style={{ backgroundColor: theme.color.grey_900 }}
            exitCallback={() => navigate("/")}
          />
          <Styled.Container>
            <Styled.Title>
              리워드를 지급 받을
              <br />
              휴대폰 번호를 입력해주세요
            </Styled.Title>

            <Styled.TextfieldContainer>
              <TextFieldStandard
                value={phoneNumber}
                onChange={(e) => {
                  const formattedPhoneNumber = e.target.value.replace(/[^\d]/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

                  if (isValidPhoneNumber(formattedPhoneNumber) || !formattedPhoneNumber) {
                    setIsErrorPhoneNumber(false);
                  } else {
                    setIsErrorPhoneNumber(true);
                  }

                  setPhoneNumber(formattedPhoneNumber);
                }}
                style={{ fontSize: "1.6rem" }}
                placeholder="전화번호 형식에 맞춰 입력해주세요"
                isError={isErrorPhoneNumber}
                errorHelperText="전화번호 형식을 맞춰주세요"
              />
            </Styled.TextfieldContainer>

            <Styled.BottomDescription>
              휴대폰 번호는 리워드 받기 이외의 용도로 사용되지 않습니다. 리워드 받기를 누르면 정보 제공에 동의합니다.
            </Styled.BottomDescription>

            <Styled.BottomCTA>
              <RoundButton>리워드 받기</RoundButton>
            </Styled.BottomCTA>
          </Styled.Container>
        </>
      )}
    </>
  );
}

export default RewardInformation;
