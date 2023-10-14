import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "src/components/dropdown";
import FlexBox from "src/components/flexBox";
import { MONTH_TO_DATES, MONTHS } from "src/data/dates";
import { HEALTH_INTERESTS } from "src/data/interest";
import { useSignUp } from "src/hooks/account/useSignUp";
import { Box } from "src/lib/layoutStyle";
import { makeYears } from "src/utils/inputUtils";
import * as Lib from "../lib";
import * as Styled from "./index.style";
import type { TAdditionalInformation, TAdditionalInformationParam } from "src/interfaces/account";
import type { TMonth } from "src/interfaces/informationQRPage";

const YEARS = makeYears();
const MAX_HEALTH_INTERESTS_COUNT = 3;

function AdditionalInformation() {
  const { signUp } = useSignUp();

  const [info, setInfo] = useState<Omit<TAdditionalInformation, "birthDate">>({
    name: "",
    gender: "m",
    healthInterests: [],
    invitationCode: "",
  });
  const [birthDate, setBirthDate] = useState<{
    year: number;
    month: number;
    date: number;
  }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

  const prevInfo = useLocation().state as TAdditionalInformationParam;
  const isNextButtonEnabled = info.name !== "";

  const handleChangeBirthDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setBirthDate({ ...birthDate, [name]: Number(value.slice(0, -1)) });
  };

  const handleClickGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    setInfo({ ...info, [name]: value });
  };

  const handleClickHealthInterest = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;

    const { interest } = dataset as { interest: string };

    if (info.healthInterests.includes(interest)) {
      setInfo((infoParam) => ({ ...infoParam, healthInterests: infoParam.healthInterests.filter((hi) => hi !== interest) }));

      return;
    }

    if (info.healthInterests.length === MAX_HEALTH_INTERESTS_COUNT) {
      return;
    }

    setInfo((infoParam) => ({ ...infoParam, healthInterests: [...infoParam.healthInterests, interest] }));
  };

  const handleClickNextButton = () => {
    if (!isNextButtonEnabled) {
      return;
    }

    signUp({ ...prevInfo, ...info, birthDate: `${birthDate.year}-${birthDate.month}-${birthDate.date}` });
  };

  return (
    <>
      <Styled.Container>
        <Lib.Title text="추가 정보를 수집할게요" description="기본 정보와 추천인 코드를 입력해주세요" mb="4rem" />

        <Box mb="3.2rem">
          <Box mb="8px">
            <Styled.Label>이름</Styled.Label>
          </Box>
          <Styled.TextField
            type="text"
            placeholder="이름을 입력해주세요"
            value={info.name}
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
          />
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
            onChange={(e) => {
              setInfo({ ...info, invitationCode: e.target.value });
            }}
          />
        </Box>
      </Styled.Container>
      <Lib.NextButton isEnabled={isNextButtonEnabled} onClick={handleClickNextButton} />
    </>
  );
}

export default AdditionalInformation;
