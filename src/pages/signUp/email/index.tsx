import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "src/utils/inputUtils";
import * as Lib from "../lib";

function Email() {
  const [email, setEmail] = useState<string>("");
  const [validation, setValidation] = useState<{ isError: boolean; errorText: string }>({
    isError: false,
    errorText: "",
  });
  const navigate = useNavigate();

  const isEnabled = email.length > 0 && !validation.isError;

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isEmailValidated = validateEmail(e.target.value);

    setValidation({
      isError: !isEmailValidated,
      errorText: isEmailValidated ? "" : "잘못된 이메일 형식입니다",
    });

    setEmail(e.target.value);
  };

  const handleClickNextButton = () => {
    if (!isEnabled) {
      return;
    }
    /*
      <TODO>
      1. 중복 이메일인지 확인
      2. 탈퇴한 계정인지 확인
    */

    navigate("/signup/password", {
      state: { email },
    });
  };

  return (
    <>
      <Lib.Container>
        <Lib.Title text="이메일을 입력해주세요" />
        <Lib.TextField
          label="이메일"
          id="email"
          placeholder="이메일 형식에 맞춰 입력해주세요"
          value={email}
          onChange={handleChangeEmail}
          isError={validation.isError}
          errorText={validation.errorText}
          type="email"
        />
      </Lib.Container>
      <Lib.NextButton isEnabled={isEnabled} onClick={handleClickNextButton} />
    </>
  );
}

export default Email;
