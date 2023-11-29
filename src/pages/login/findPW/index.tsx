import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { validateEmail, sendVerificationCode, sendVerificationForPW } from "src/api/account/service";
import FlexBox from "src/components/flexBox";
import { VERIFICATION_CODE_LENGTH, VERIFICATION_CODE_AGE, VERIFICATION_CODE_EXPIRED } from "src/data/account";
import * as Lib from "../../signUp/lib";
import * as Styled from "./index.style";

interface ITextField {
  value: string;
  isError: boolean;
  errorText: string;
  isVerified: boolean;
}

const DEFAULT_TEXTFIELD: ITextField = {
  value: "",
  isError: false,
  errorText: "",
  isVerified: false,
};

function Email() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState<ITextField>(DEFAULT_TEXTFIELD);
  const [code, setCode] = useState<ITextField>(DEFAULT_TEXTFIELD);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const serverCode = useRef<string>("");

  const setCodeTimer = () => {
    let time = VERIFICATION_CODE_AGE;

    const timerId = setInterval(() => {
      if (time < 0) {
        setTimeLeft(VERIFICATION_CODE_EXPIRED);
        clearInterval(timerId);
      }

      setTimeLeft(--time);
    }, 1000);
  };

  const handleClickVerifyEmail = async () => {
    if (!email.value || email.isVerified) {
      return;
    }
    const { data, success } = await validateEmail(email.value);

    console.log(success, data);

    if (data === "DEFAULT") {
      await sendVerificationForPW({ email: email.value });

      setEmail({ ...email, isVerified: true });
      setCodeTimer();

      return;
    } else if (["KAKAO", "APPLE"].includes(data)) {
      setEmail({
        ...email,
        isError: true,
        errorText: "소셜 로그인을 이용해주세요",
      });

      return;
    } else {
      if (success && data === "이메일 주소가 유효합니다.") {
        setEmail({
          ...email,
          isError: true,
          errorText: "존재하지 않는 이메일입니다.",
        });

        return;
      } else {
        setEmail({
          ...email,
          isError: true,
          errorText: data,
        });
      }
    }
  };

  const handleClickVerifyCode = async () => {
    const codeData = await accountFetcher.checkUserPWFindStep1({
      email: email.value,
      code: code.value,
    });

    console.log(codeData);

    // if (code.value.length === 0 || code.isVerified) {
    //   return;
    // }
    // if (timeLeft === VERIFICATION_CODE_EXPIRED) {
    //   setCode({
    //     ...code,
    //     value: "",
    //     isError: true,
    //     errorText: "인증시간이 초과되었습니다.",
    //   });

    //   return;
    // }

    // if (code.value !== serverCode.current) {
    //   setCode({
    //     ...code,
    //     value: "",
    //     isError: true,
    //     errorText: "인증번호가 올바르지 않습니다",
    //   });

    //   return;
    // }

    // setCode({ ...code, isVerified: true });
  };

  const handleClickNextButton = async () => {
    //
  };

  return (
    <>
      <Lib.Container>
        <Lib.Title text="이메일을 입력해주세요" />
        <FlexBox alignItems="end" gap="2rem" mb="15px">
          <Styled.TextFieldWrapper>
            <Lib.TextField
              label="이메일"
              id="email"
              placeholder="이메일 형식에 맞춰 입력해주세요"
              value={email.value}
              onChange={(e) => {
                setEmail({
                  ...DEFAULT_TEXTFIELD,
                  value: e.target.value,
                });
              }}
              isError={email.isError}
              errorText={email.errorText}
              type="email"
              adornment={<Lib.RemoveButton onClick={() => setEmail(DEFAULT_TEXTFIELD)} />}
            />
          </Styled.TextFieldWrapper>
          <Styled.ButtonWrapper>
            <Styled.Button isEnabled={email.value.length > 0 && email.isVerified === false} onClick={handleClickVerifyEmail}>
              인증번호 전송
            </Styled.Button>
          </Styled.ButtonWrapper>
        </FlexBox>

        {email.isVerified && (
          <FlexBox alignItems="end" gap="2rem">
            <Styled.TextFieldWrapper>
              <Lib.TextField
                label="인증번호"
                id="code"
                placeholder="인증번호를 입력해주세요"
                value={code.value}
                onChange={(e) => {
                  setCode({
                    ...DEFAULT_TEXTFIELD,
                    value: e.target.value.slice(0, VERIFICATION_CODE_LENGTH),
                  });
                }}
                isError={code.isError}
                errorText={code.errorText}
                type="number"
                adornment={
                  timeLeft > 0 && (
                    <Styled.Typography>
                      남은 시간 {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60}
                    </Styled.Typography>
                  )
                }
              />
            </Styled.TextFieldWrapper>
            <Styled.ButtonWrapper>
              <Styled.Button
                isEnabled={code.value.length === VERIFICATION_CODE_LENGTH && code.isVerified === false}
                onClick={handleClickVerifyCode}
              >
                확인
              </Styled.Button>
            </Styled.ButtonWrapper>
          </FlexBox>
        )}
      </Lib.Container>
      <Lib.NextButton isEnabled={code.isVerified} onClick={handleClickNextButton} />
    </>
  );
}

export default Email;
