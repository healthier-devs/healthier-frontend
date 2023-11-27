import { Link } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import { NECESSARY_AGREEMENTS, OPTIONAL_AGREEMENTS } from "src/data/member_agreement";
import theme from "src/lib/theme";
import * as Styled from "../index.style";

function Terms() {
  return (
    <Styled.Box padding="2.4rem">
      <Styled.Box mb="1.6rem">
        <Styled.Typography className="title-1">약관 및 처리방침</Styled.Typography>
      </Styled.Box>

      <Styled.Box mb="1.8rem">
        <Link to={NECESSARY_AGREEMENTS[0].url} target="_blank">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">서비스 이용약관</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Link>
      </Styled.Box>

      <Styled.Box>
        <Link to={NECESSARY_AGREEMENTS[1].url} target="_blank">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">개인정보 처리방침</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Link>
      </Styled.Box>
    </Styled.Box>
  );
}

export default Terms;
