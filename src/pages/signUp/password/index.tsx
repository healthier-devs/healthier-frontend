import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveIcon from "src/assets/icons/RemoveIcon";
import { validatePassword } from "src/utils/inputUtils";
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

  const isEnabled = password.length > 0 && password === passwordConfirm;

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPassword(value);

    if (value.length > 0 && value.length < 6) {
      setValidation({
        isError: true,
        errorText: "최소 6자이상 설정할 수 있어요",
      });

      return;
    }

    if (value.length > 18) {
      setValidation({
        isError: true,
        errorText: "최대 18자까지 설정할 수 있어요",
      });

      return;
    }

    if (!validatePassword(value)) {
      setValidation({
        isError: true,
        errorText: "잘못된 비밀번호 형식입니다",
      });

      return;
    }

    setValidation({
      isError: false,
      errorText: "",
    });
  };

  useEffect(() => {
    if (!email) {
      alert("이메일을 입력해 주세요");
      navigate("/signup/email");
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
      <Lib.NextButton isEnabled={isEnabled} onClick={() => null}></Lib.NextButton>
    </>
  );
}

export default Password;
