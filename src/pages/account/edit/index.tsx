import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import { useUserData } from "src/hooks/account/useUserData";
import theme from "src/lib/theme";
import * as Lib from "../../signUp/lib";
import { Box, Typography } from "../settings/index.style";

function Edit() {
  const { userData, isLoading } = useUserData();

  return !isLoading ? (
    <div>
      <Box padding="3.2rem 2.4rem 0">
        <Box mb="4rem">
          <Lib.TextField id="account-id" label="이름" value={userData.name} disabled />
        </Box>
        <Box mb="4rem">
          <Lib.TextField id="account-phone-number" label="전화번호" value="010-1234-5678" disabled />
        </Box>
        <Box>
          <Lib.TextField id="account-email" label="이메일" value="healthier@email.com" disabled />
        </Box>
      </Box>
      <Divider />
      <Box padding="2rem 2.4rem 0">
        <Link to="/account/edit/password">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Typography className="title-3">비밀번호 수정하기</Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Link>
      </Box>
    </div>
  ) : (
    <>Loading...</>
  );
}

export default Edit;
