import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Box from "src/components/box";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import NavigationBar from "src/components/navigationBar";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

interface IAccountItem {
  label: string;
  path: string;
}

const accountItems: IAccountItem[] = [
  {
    label: "나의 건강 기록장",
    path: "",
  },
  {
    label: "선물함 바로가기",
    path: "",
  },
  {
    label: "환경 설정",
    path: "",
  },
  {
    label: "공지사항",
    path: "",
  },
  {
    label: "1:1 문의",
    path: "",
  },
];

function AccountIndex() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Box style={{ padding: "3.2rem 2.4rem 2.4rem 2.4rem" }}>
          <Box mb="3rem">
            <FlexBox gap="12px" alignItems="start">
              <Styled.UserImage src="/images/account/user.svg" />

              <Styled.UserInfoWrapper>
                <FlexBox alignItems="center" mb="8px" gap="8px">
                  <Styled.Username>정설아</Styled.Username>
                  <Styled.Tag>
                    <span className="label">26세・여</span>
                  </Styled.Tag>
                </FlexBox>

                <Styled.Interests>영양제, 운동, 수면</Styled.Interests>
              </Styled.UserInfoWrapper>

              <Styled.EditProfileButton>프로필 수정</Styled.EditProfileButton>
            </FlexBox>
          </Box>
          <Styled.EditHealthInfoButton>건강정보 수정하기</Styled.EditHealthInfoButton>
        </Box>

        <Divider />

        <Styled.ListContainer>
          <Styled.List>
            {accountItems.map(({ label, path }) => (
              <Styled.ListItem key={label}>
                <FlexBox alignItems="center">
                  <p className="label">{label}</p>
                  <button className="wrap" onClick={() => navigate(`/account/${path}`)}>
                    <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
                  </button>
                </FlexBox>
              </Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.ListContainer>
      </div>
      <NavigationBar menu="account" />
    </>
  );
}

export default AccountIndex;
