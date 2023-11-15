import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Box from "src/components/box";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import NavigationBar from "src/components/navigationBar";
import { useUserData } from "src/hooks/account/useUserData";
import { useValidateToken } from "src/hooks/account/useValidateToken";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

interface IAccountItem {
  label: string;
  path: string;
}

const accountItems: IAccountItem[] = [
  {
    label: "나의 건강 기록장",
    path: "/diagRecord",
  },
  {
    label: "선물함 바로가기",
    path: "",
  },
  {
    label: "환경설정",
    path: "/settings",
  },
  {
    label: "공지사항",
    path: "/announcement",
  },
  {
    label: "1:1 문의",
    path: "",
  },
];

function AccountIndex() {
  const navigate = useNavigate();
  const { validateToken } = useValidateToken();
  const { userData, isLoading } = useUserData();

  return !isLoading ? (
    <>
      <div>
        <Box style={{ padding: "3.2rem 2.4rem 2.4rem 2.4rem" }}>
          <Box mb="3rem">
            <FlexBox gap="12px" alignItems="start">
              <Styled.UserImage src="/images/account/user.svg" />

              <Styled.UserInfoWrapper>
                <FlexBox alignItems="center" mb="8px" gap="8px">
                  <Styled.Username>{userData.name}</Styled.Username>
                  <Styled.Tag>
                    <span className="label">
                      {userData.age}세 ・ {userData.gender === "m" ? "남" : "여"}
                    </span>
                  </Styled.Tag>
                </FlexBox>
                {userData.healthInterests.length > 0 ? (
                  <Styled.Interests>{userData.healthInterests.join(", ")}</Styled.Interests>
                ) : (
                  <Styled.Interests>관심정보가 없습니다.</Styled.Interests>
                )}
              </Styled.UserInfoWrapper>

              <Styled.EditProfileButton onClick={() => navigate("/account/edit")}>프로필 수정</Styled.EditProfileButton>
            </FlexBox>
          </Box>
          <Styled.EditHealthInfoButton onClick={() => navigate(`/account/healthInfoModify`)}>건강정보 수정하기</Styled.EditHealthInfoButton>
        </Box>

        <Divider />

        <Styled.ListContainer>
          <Styled.List>
            {accountItems.map(({ label, path }) => (
              <Styled.ListItem key={label}>
                <button className="button" onClick={() => navigate(`/account${path}`)}>
                  <FlexBox alignItems="center">
                    <p className="label">{label}</p>
                    <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
                  </FlexBox>
                </button>
              </Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.ListContainer>
      </div>
      <NavigationBar menu="account" />
    </>
  ) : (
    <></>
  );
}

export default AccountIndex;
