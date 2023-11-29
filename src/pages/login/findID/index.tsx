import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import Dropdown from "src/components/dropdown";
import RoundButton from "src/components/roundButton";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { Label } from "src/components/textFieldOutlined/index.style";
import { MONTH_TO_DATES, MONTHS } from "src/data/dates";
import theme from "src/lib/theme";
import { makeYears } from "src/utils/inputUtils";
import * as Styled from "./index.style";
import type { TMonth } from "src/interfaces/informationQRPage";

const TEXTFIELD_STYLE: React.CSSProperties = { textAlign: "start", fontSize: "1.4rem", borderRadius: "0.8rem" };
const YEARS = makeYears();
const FindID = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState({
    name: "",
    birth: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    gender: "m",
  });
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInformation({ ...information, name: e.target.value });
  };

  const handleChangeBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInformation({ ...information, birth: { ...information.birth, [name]: Number(value.slice(0, -1)) } });
  };

  const handleClickGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    setInformation({ ...information, [name]: value });
  };

  const handleClickNextButton = async () => {
    if (!isNextButtonEnabled()) {
      return;
    }
    const data = await getEmail();

    if (data.message === "User Not Found.") {
      navigate("/account/no-id");
    } else if (data.message === "Multiple users are found") {
      alert("중복된 아이디가 있습니다.\n관리자에게 문의해주세요.");
      navigate("/");
    } else if (data.registerType) {
      navigate("/login", {
        state: {
          type: data.registerType,
        },
      });
    }
  };

  const getEmail = async () => {
    try {
      const EmailData = await accountFetcher.postUserEmailFind({
        name: information.name,
        birthDate:
          information.birth.year +
          "-" +
          information.birth.month.toString().padStart(2, "0") +
          "-" +
          information.birth.date.toString().padStart(2, "0"),
        gender: information.gender as "m" | "f",
      });

      return EmailData;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const isNextButtonEnabled = () => {
    const {
      name,
      birth: { year, month, date },
      gender,
    } = information;

    return name && year && month && date && gender;
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>
        <div className="Title">회원정보(아이디) 찾기</div>
        <div className="Desc">회원가입 시 입력했던 정보를 입력해주세요.</div>
      </Styled.Title>
      <Styled.InputsContainer>
        <TextFieldOutlined
          label="이름"
          name="name"
          id="qr-input-name"
          placeholder="이름을 입력해주세요"
          placeholderSize="1.4rem"
          style={TEXTFIELD_STYLE}
          value={information.name}
          onChange={handleChangeName}
        />

        <div style={{ width: "100%" }}>
          <Label labelGap="0.7rem">생년월일</Label>
          <Styled.InputsWrapper gap="0.8rem">
            <div style={{ flex: 3 }}>
              <Dropdown
                isSelected={information.birth.year !== 0}
                options={YEARS}
                value={information.birth.year + "년"}
                onChange={handleChangeBirth}
                name="year"
              />
            </div>
            <div style={{ flex: 2 }}>
              <Dropdown
                isSelected={information.birth.month !== 0}
                options={MONTHS}
                value={information.birth.month + "월"}
                onChange={handleChangeBirth}
                name="month"
              />
            </div>
            <div style={{ flex: 2 }}>
              <Dropdown
                isSelected={information.birth.date !== 0}
                options={MONTH_TO_DATES[information.birth.month as TMonth]}
                value={information.birth.date + "일"}
                onChange={handleChangeBirth}
                name="date"
              />
            </div>
          </Styled.InputsWrapper>
        </div>

        <div>
          <Label labelGap="0.7rem">성별</Label>
          <Styled.InputsWrapper gap="1rem">
            <Styled.GenderButton isSelected={information.gender === "m"} name="gender" value="m" onClick={handleClickGender}>
              남성
            </Styled.GenderButton>
            <Styled.GenderButton isSelected={information.gender === "f"} name="gender" value="f" onClick={handleClickGender}>
              여성
            </Styled.GenderButton>
          </Styled.InputsWrapper>
        </div>
      </Styled.InputsContainer>
      <Styled.NextButtonContainer>
        <RoundButton
          backgroundColor={isNextButtonEnabled() ? theme.color.blue : theme.color.grey_750}
          color={isNextButtonEnabled() ? theme.color.grey_100 : theme.color.grey_600}
          onClick={handleClickNextButton}
        >
          다음 단계
        </RoundButton>
      </Styled.NextButtonContainer>
    </Styled.Wrapper>
  );
};

export default FindID;
