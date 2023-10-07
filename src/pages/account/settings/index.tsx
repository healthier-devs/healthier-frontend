import { useState } from "react";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import Switch from "src/components/switch";
import { useLogout } from "src/hooks/account/useLogout";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

function Settings() {
  const [isPushNotiChecked, setIsPushNotiChecked] = useState<boolean>(false);
  const [isMarketingNotiChecked, setIsMarketingNotiChecked] = useState<boolean>(false);

  const { logout } = useLogout();

  return (
    <div>
      <Styled.Box padding="3.2rem 2.4rem 2.4rem">
        <Styled.Box mb="1.6rem">
          <Styled.Typography className="title-1">앱 푸시 알림 설정</Styled.Typography>
        </Styled.Box>

        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
            <Styled.Typography className="title-2">앱 푸시 알림 동의</Styled.Typography>
            <Switch checked={isPushNotiChecked} onClick={() => setIsPushNotiChecked(!isPushNotiChecked)} />
          </FlexBox>
          <Styled.Typography className="description">서비스와 관련된 모든 알림을 수신해요</Styled.Typography>
        </Styled.Box>

        <Styled.Box>
          <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
            <Styled.Typography className="title-2">마케팅 알림 동의</Styled.Typography>
            <Switch checked={isMarketingNotiChecked} onClick={() => setIsMarketingNotiChecked(!isMarketingNotiChecked)} />
          </FlexBox>
          <Styled.Typography className="description">마케팅 정보 수신에 동의해요</Styled.Typography>
        </Styled.Box>
      </Styled.Box>

      <Divider />

      <Styled.Box padding="2.4rem">
        <Styled.Box mb="1.6rem">
          <Styled.Typography className="title-1">약관 및 처리방침</Styled.Typography>
        </Styled.Box>

        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">서비스 이용약관</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>

        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">개인정보 처리방침</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>

        <Styled.Box>
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">위치정보 이용 약관</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>
      </Styled.Box>

      <Divider />

      <Styled.Box padding="2.4rem">
        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" className="click" onClick={() => logout()}>
            <Styled.Typography className="title-2">로그아웃</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>

        <Styled.Box mb="1.8rem">
          <FlexBox alignItems="center" justifyContent="space-between" className="click">
            <Styled.Typography className="title-2">회원 탈퇴</Styled.Typography>
            <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
          </FlexBox>
        </Styled.Box>

        <Styled.Box>
          <Styled.Box mb="4px">
            <Styled.Typography className="title-2">버전 정보</Styled.Typography>
          </Styled.Box>
          <Styled.Typography className="description">최신 버전입니다 (ver1.1.0) </Styled.Typography>
        </Styled.Box>
      </Styled.Box>
    </div>
  );
}

export default Settings;
