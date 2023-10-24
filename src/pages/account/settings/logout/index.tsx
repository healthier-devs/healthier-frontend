import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import { useLogout } from "src/hooks/account/useLogout";
import theme from "src/lib/theme";
import * as Styled from "../index.style";

function Logout() {
  const { logout } = useLogout();

  return (
    <Styled.Box mb="1.8rem">
      <FlexBox alignItems="center" justifyContent="space-between" className="click" onClick={() => logout()}>
        <Styled.Typography className="title-2">로그아웃</Styled.Typography>
        <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
      </FlexBox>
    </Styled.Box>
  );
}

export default Logout;
