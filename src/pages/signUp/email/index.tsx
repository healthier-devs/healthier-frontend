import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { validateEmail } from "src/api/account/service";
import RemoveIcon from "src/assets/icons/RemoveIcon";
import * as Lib from "../lib";

function Email() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState<string>("");
  const [validation, setValidation] = useState<{ isError: boolean; errorText: string }>({
    isError: false,
    errorText: "",
  });

  const isEnabled = email.length > 0 && !validation.isError;
  const { isAgree } = location.state ?? false;
  const { marketingOptIn } = location.state as { marketingOptIn: boolean };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidation({
      isError: false,
      errorText: "",
    });
    setEmail(e.target.value);
  };

  const handleClickRemoveIcon = () => {
    setEmail("");
    setValidation({
      isError: false,
      errorText: "",
    });
  };

  const handleClickNextButton = async () => {
    if (!isEnabled) {
      return;
    }

    const { data, success } = await validateEmail(email);

    if (success) {
      navigate("/signup/step3", {
        state: { email, marketingOptIn },
      });

      return;
    }

    if (data === "입력한 이메일 주소가 올바르지 않습니다.") {
      setValidation({
        isError: true,
        errorText: "잘못된 이메일 형식입니다",
      });

      return;
    }

    if (data === "이미 사용 중인 이메일 주소입니다.") {
      setValidation({
        isError: true,
        errorText: "이미 사용 중인 이메일 주소입니다.",
      });

      return;
    }
  };

  useEffect(() => {
    if (!isAgree) {
      alert("유효하지 않은 접근입니다");
      navigate("/signup");
    }
  }, [isAgree, navigate]);

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
          icon={<RemoveIcon />}
          onClickIcon={handleClickRemoveIcon}
        />
      </Lib.Container>
      <Lib.NextButton isEnabled={isEnabled} onClick={handleClickNextButton} />
    </>
  );
}

export default Email;
