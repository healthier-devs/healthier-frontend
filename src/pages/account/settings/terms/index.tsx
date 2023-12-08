import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import PrivacyPolicy from "src/components/termsModal/PrivacyPolicy";
import TermOfUse from "src/components/termsModal/TermOfUse";
import useTermsModal from "src/hooks/useTermsModal";
import theme from "src/lib/theme";
import * as Styled from "../index.style";

function Terms() {
  const { openPrivacyPolicy, closePrivacyPolicy, openTermOfUse, closeTermOfUse, termOfUseOpen, privacyPolicyOpen } = useTermsModal();

  return (
    <>
      {termOfUseOpen && <TermOfUse closeModal={closeTermOfUse} />}
      {privacyPolicyOpen && <PrivacyPolicy closeModal={closePrivacyPolicy} />}
      <Styled.Box padding="2.4rem">
        <Styled.Box mb="1.6rem">
          <Styled.Typography className="title-1">약관 및 처리방침</Styled.Typography>
        </Styled.Box>

        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" className="click" onClick={openTermOfUse}>
            <Styled.Typography className="title-2">회원 이용약관</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>

        <Styled.Box>
          <FlexBox alignItems="center" justifyContent="space-between" className="click" onClick={openPrivacyPolicy}>
            <Styled.Typography className="title-2">개인정보 처리방침</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>
      </Styled.Box>
    </>
  );
}

export default Terms;
