import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Dropdown from "src/components/dropdown";
import Layout from "src/components/layout";
import RoundButton from "src/components/roundButton";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { Label } from "src/components/textFieldOutlined/index.style";
import { MONTH_TO_DATES, MONTHS } from "src/data/dates";
import useHospitalId from "src/hooks/useHospitalId";
import { IInformation } from "src/interfaces/informationQRPage";
import theme from "src/lib/theme";
import { useAppDispatch } from "src/state";
import { setQRInformation } from "src/state/userSlice";
import { makeYears } from "src/utils/inputUtils";
import { Title } from "../information/index.style";
import * as Styled from "./index.style";
import type { TMonth } from "src/interfaces/informationQRPage";

const TEXTFIELD_STYLE: React.CSSProperties = { textAlign: "start", fontSize: "1.4rem", borderRadius: "0.8rem" };
const YEARS = makeYears();

function InformationQR() {
  const [information, setInformation] = useState<IInformation>({
    name: "",
    birth: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    gender: "m",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useHospitalId();

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

  const handleClickNextButton = () => {
    if (!isNextButtonEnabled()) {
      return;
    }

    dispatch(setQRInformation(information));

    navigate("/qr/symptom-type", { state: "info" });
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
    <>
      <ContentHeader back={false} exit={false} label="정보 수집" />
      <Layout padding="5.6rem 0 12rem 0">
        <div style={{ padding: "0 2.4rem" }}>
          <Title>{"환자분의 기본정보를\n입력해주세요"}</Title>
        </div>

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
            증상 감별하러 가기
          </RoundButton>
        </Styled.NextButtonContainer>
      </Layout>
    </>
  );
}

export default InformationQR;
