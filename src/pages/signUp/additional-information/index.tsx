import { useLocation } from "react-router-dom";
import Dropdown from "src/components/dropdown";
import FlexBox from "src/components/flexBox";
import { MONTH_TO_DATES, MONTHS } from "src/data/dates";
import { HEALTH_INTERESTS } from "src/data/interest";
import { useAdditionalInfo } from "src/hooks/account/useAdditionalInfo";
import { useAppleSignUp } from "src/hooks/account/useAppleSignUp";
import { useSignUp } from "src/hooks/account/useSignUp";
import { Box } from "src/lib/layoutStyle";
import { formatBirth } from "src/utils/diagnosisHook";
import { makeYears } from "src/utils/inputUtils";
import * as Lib from "../lib";
import * as Styled from "./index.style";
import type { TAdditionalInformationParam } from "src/interfaces/account";
import type { TMonth } from "src/interfaces/informationQRPage";

const YEARS = makeYears();

function AdditionalInformation() {
  const prevState = useLocation().state as TAdditionalInformationParam;

  const { signUp } = useSignUp();
  const { signUpApple } = useAppleSignUp();

  const { info, birthDate, handleChangeName, handleChangeInviCode, handleChangeBirthDate, handleClickGender, handleClickHealthInterest } =
    useAdditionalInfo();

  const isNextButtonEnabled = info.name !== "";
  const handleClickNextButton = () => {
    if (!isNextButtonEnabled) {
      return;
    }

    if (prevState.type === "apple") {
      signUpApple({
        body: {
          ...info,
          birthDate: formatBirth(birthDate),
          marketingOptIn: prevState.user.marketingOptIn,
        },
        accessToken: prevState.accessToken,
      });
    } else if (prevState.type === "kakao") {
      //
    } else if (prevState.type === "local") {
      signUp({ ...prevState.user, ...info, birthDate: formatBirth(birthDate) });
    }
  };

  return (
    <>
      <Styled.Container>
        <Lib.Title text="필수 정보를 입력해 주세요" description="기본 정보와 추천인 코드를 입력해주세요" mb="4rem" />

        <Box mb="3.2rem">
          <Box mb="8px">
            <Styled.Label>이름</Styled.Label>
          </Box>
          <Styled.TextField type="text" placeholder="이름을 입력해주세요" value={info.name} onChange={handleChangeName} />
        </Box>

        <Box mb="3.2rem">
          <Box mb="8px">
            <Styled.Label>출생년도</Styled.Label>
          </Box>
          <FlexBox gap="8px">
            <Styled.BirthDateWrapper flex={3}>
              <Dropdown
                isSelected={birthDate.year !== 0}
                options={YEARS}
                value={birthDate.year + "년"}
                onChange={handleChangeBirthDate}
                name="year"
              />
            </Styled.BirthDateWrapper>

            <Styled.BirthDateWrapper flex={2}>
              <Dropdown
                isSelected={birthDate.month !== 0}
                options={MONTHS}
                value={birthDate.month + "월"}
                onChange={handleChangeBirthDate}
                name="month"
              />
            </Styled.BirthDateWrapper>

            <Styled.BirthDateWrapper flex={2}>
              <Dropdown
                isSelected={birthDate.date !== 0}
                options={MONTH_TO_DATES[birthDate.month as TMonth]}
                value={birthDate.date + "일"}
                onChange={handleChangeBirthDate}
                name="date"
              />
            </Styled.BirthDateWrapper>
          </FlexBox>
        </Box>

        <Box mb="3.2rem">
          <Box mb="8px">
            <Styled.Label>성별</Styled.Label>
          </Box>

          <FlexBox gap="1rem">
            <Styled.GenderButton isSelected={info.gender === "m"} name="gender" value="m" onClick={handleClickGender}>
              남성
            </Styled.GenderButton>
            <Styled.GenderButton isSelected={info.gender === "f"} name="gender" value="f" onClick={handleClickGender}>
              여성
            </Styled.GenderButton>
          </FlexBox>
        </Box>

        <Box mb="3.2rem">
          <Box mb="8px">
            <Styled.Label>관심 건강분야</Styled.Label>
          </Box>

          <FlexBox gap="8px" flexWrap="wrap">
            {HEALTH_INTERESTS.map(({ id, name }) => (
              <Styled.Chip
                key={id}
                data-interest={name}
                onClick={handleClickHealthInterest}
                isSelected={info.healthInterests.includes(name)}
              >
                <span className="health-interest-text">{name}</span>
              </Styled.Chip>
            ))}
          </FlexBox>

          <Styled.HealthInterestDescription>
            <p className="health-interest-description">관심 분야는 최대 3개까지 선택 가능합니다.</p>
          </Styled.HealthInterestDescription>
        </Box>

        <Box>
          <Box mb="8px">
            <Styled.Label>추천인 코드 (선택)</Styled.Label>
          </Box>
          <Styled.TextField
            type="text"
            placeholder="추천인코드를 입력해주세요"
            value={info.invitationCode}
            onChange={handleChangeInviCode}
          />
        </Box>
      </Styled.Container>
      <Lib.NextButton isEnabled={isNextButtonEnabled} onClick={handleClickNextButton} />
    </>
  );
}

export default AdditionalInformation;
