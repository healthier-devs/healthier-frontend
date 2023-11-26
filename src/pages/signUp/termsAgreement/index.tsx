import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation, useSearchParams } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import { NECESSARY_AGREEMENTS, OPTIONAL_AGREEMENTS } from "src/data/member_agreement";
import * as Lib from "../lib";
import * as Styled from "./index.style";

const NECESSARY_NUMS = NECESSARY_AGREEMENTS.length;
const OPTIONAL_NUMS = OPTIONAL_AGREEMENTS.length;
const TERMS_NUM = NECESSARY_NUMS + OPTIONAL_NUMS;

function TermsAgreement() {
  const navigate = useNavigate();
  const accessToken = useLocation().state.accessToken ?? "";

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [all, setAll] = useState<boolean>(false);
  const [necessaries, setNecessaries] = useState<boolean[]>(Array.from({ length: NECESSARY_NUMS }, () => false));
  const [optionals, setOptionals] = useState<boolean[]>(Array.from({ length: OPTIONAL_NUMS }, () => false));

  const isEnabled = necessaries.filter((agree) => agree === true).length === NECESSARY_NUMS;

  const handleClickNextButton = () => {
    if (type === "social") {
      navigate("/signup/step4", {
        state: {
          type: "apple",
          user: {
            marketingOptIn: optionals[0],
          },
          accessToken,
        },
      });
    } else {
      navigate("/signup/step2", {
        state: { isAgree: true, marketingOptIn: optionals[0] },
      });
    }
  };

  const handleClickAgreeAll = () => {
    if (all) {
      setNecessaries(Array.from({ length: NECESSARY_NUMS }, () => false));
      setOptionals(Array.from({ length: OPTIONAL_NUMS }, () => false));
      setAll(false);

      return;
    }

    setNecessaries(Array.from({ length: NECESSARY_NUMS }, () => true));
    setOptionals(Array.from({ length: OPTIONAL_NUMS }, () => true));
    setAll(true);
  };

  const handleClickNecessary = (idx: number) => {
    setNecessaries([...necessaries.slice(0, idx), !necessaries[idx], ...necessaries.slice(idx + 1)]);
  };

  const handleClickOptional = (idx: number) => {
    setOptionals([...optionals.slice(0, idx), !optionals[idx], ...optionals.slice(idx + 1)]);
  };

  useEffect(() => {
    if (necessaries.filter((agree) => agree === true).length + optionals.filter((agree) => agree === true).length === TERMS_NUM) {
      setAll(true);

      return;
    }
    setAll(false);
  }, [necessaries, optionals, setAll]);

  return (
    <>
      <Lib.Container>
        <Lib.Title text={"헬시어 서비스 이용약관에\n동의해주세요"} />
        <Styled.Box isEnabled={all}>
          <FlexBox alignItems="center" gap="1.6rem">
            <Lib.Checkbox id="agree-all" defaultChecked={all} onClick={handleClickAgreeAll} />
            <Styled.Typography className="body1">전체 동의합니다</Styled.Typography>
          </FlexBox>
        </Styled.Box>
        <div>
          <Styled.List>
            {NECESSARY_AGREEMENTS.map(({ text, url }, idx) => (
              <Styled.ListItem key={idx}>
                <FlexBox alignItems="center" gap="10px">
                  <Lib.Checkbox
                    id={`necessary-${idx + 1}`}
                    variant="secondary"
                    defaultChecked={necessaries[idx]}
                    onClick={() => handleClickNecessary(idx)}
                  />
                  <Styled.Typography className="body2">{text} (필수)</Styled.Typography>
                  <Link to={url} target="_blank">
                    <Styled.Typography className="link">내용 보기</Styled.Typography>
                  </Link>
                </FlexBox>
              </Styled.ListItem>
            ))}
            {OPTIONAL_AGREEMENTS.map(({ text, url }, idx) => (
              <Styled.ListItem key={idx}>
                <FlexBox alignItems="center" gap="10px">
                  <Lib.Checkbox
                    id={`optional-${idx + 1}`}
                    variant="secondary"
                    defaultChecked={optionals[idx]}
                    onClick={() => handleClickOptional(idx)}
                  />
                  <Styled.Typography className="body2">{text} (선택)</Styled.Typography>
                  {url && (
                    <Link to={url} target="_blank">
                      <Styled.Typography className="link">내용 보기</Styled.Typography>
                    </Link>
                  )}
                </FlexBox>
              </Styled.ListItem>
            ))}
          </Styled.List>
        </div>
      </Lib.Container>
      <Lib.NextButton isEnabled={isEnabled} onClick={handleClickNextButton} text="동의하고 계속하기" />
    </>
  );
}

export default TermsAgreement;
