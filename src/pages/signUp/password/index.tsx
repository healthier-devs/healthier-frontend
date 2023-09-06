import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validatePassword } from "src/api/account/service";
import RemoveIcon from "src/assets/icons/RemoveIcon";
import { useSignUp } from "src/hooks/account/useSignUp";
import * as Lib from "../lib";

function Password() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state ?? "";

  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [validation, setValidation] = useState<{ isError: boolean; errorText: string }>({
    isError: false,
    errorText: "",
  });

  const { signUp } = useSignUp();

  const isEnabled = password.length > 0 && password === passwordConfirm;

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPassword(value);
    setValidation({
      isError: false,
      errorText: "",
    });
  };

  const handleClickNextButton = async () => {
    if (!isEnabled) {
      return;
    }

    const { data, success } = await validatePassword({
      email,
      password,
      confirmPassword: passwordConfirm,
    });

    if (!success) {
      setValidation({
        isError: true,
        errorText: data,
      });

      return;
    }

    signUp({
      username: email,
      name: "홍길동",
      phoneNumber: "010-1234-5678",
      gender: "m",
      birthDate: "1971-01-01",
      nickname: "길동쓰",
      marketingOptIn: true,
      healthInterests: ["미용"],
      confirmPassword: passwordConfirm,
      password,
    });
  };

  useEffect(() => {
    if (!email) {
      alert("유효하지 않은 접근입니다.");
      navigate("/signup");
    }
  }, [email, navigate]);

  return (
    <>
      <Lib.Container>
        <Lib.Title text="비밀번호를 입력해주세요" description={"영문 대/소문자, 숫자, 특수문자 포함\n6~18자 이내로 입력해주세요"} />
        <form>
          <Lib.TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={handleChangePassword}
            id="password"
            placeholder="비밀번호를 형식에 맞춰 입력해주세요"
            isError={validation.isError}
            errorText={validation.errorText}
            icon={<RemoveIcon />}
            onClickIcon={() => {
              setPassword("");
              setValidation({
                isError: false,
                errorText: "",
              });
            }}
            tabIndex={1}
          />
          <Lib.TextField
            label="비밀번호 확인"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            id="password-confirm"
            placeholder="입력한 비밀번호를 다시 입력해주세요"
            isError={passwordConfirm.length > 0 && password !== passwordConfirm}
            errorText={"잘못 입력하셨습니다. 다시 입력해 주세요."}
            icon={<RemoveIcon />}
            onClickIcon={() => setPasswordConfirm("")}
            containerStyle={{ marginTop: "3.6rem" }}
            tabIndex={2}
          />
        </form>
      </Lib.Container>
      <Lib.NextButton isEnabled={isEnabled} onClick={handleClickNextButton}></Lib.NextButton>
    </>
  );
}

export default Password;
