import { useState } from "react";
import { useResetPassword } from "src/hooks/account/useResetPassword";
import * as Lib from "src/pages/signUp/lib";
import { useAppSelector } from "src/state";

function ResetPassword() {
  const { email } = useAppSelector((state) => state.user);

  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [validation, setValidation] = useState<{ isError: boolean; errorText: string }>({
    isError: false,
    errorText: "",
  });

  const { resetPassword } = useResetPassword({ setValidation });

  const isEnabled = password.length > 0 && password === passwordConfirm;
  const handleClickNextButton = () => {
    resetPassword({
      userEmail: email,
      body: {
        password,
        confirmPassword: passwordConfirm,
      },
    });
  };

  return (
    <>
      <Lib.Container>
        <Lib.Title text="새 비밀번호를 입력해주세요" description={"영문 대/소문자, 숫자, 특수문자 포함\n6~18자 이내로 입력해주세요"} />
        <form>
          <Lib.TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="비밀번호를 형식에 맞춰 입력해주세요"
            isError={validation.isError}
            errorText={validation.errorText}
            adornment={
              <Lib.RemoveButton
                onClick={() => {
                  setPassword("");
                  setValidation({
                    isError: false,
                    errorText: "",
                  });
                }}
              />
            }
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
            errorText="잘못 입력하셨습니다. 다시 입력해 주세요."
            adornment={<Lib.RemoveButton onClick={() => setPasswordConfirm("")} />}
            containerStyle={{ marginTop: "3.6rem" }}
            tabIndex={2}
          />
        </form>
      </Lib.Container>
      <Lib.NextButton isEnabled={isEnabled} onClick={handleClickNextButton} text="수정 완료" />
    </>
  );
}

export default ResetPassword;
