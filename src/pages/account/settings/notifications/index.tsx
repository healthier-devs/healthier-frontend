import { useState } from "react";
import FlexBox from "src/components/flexBox";
import Switch from "src/components/switch";
import { useGetNotiSubscribed } from "src/hooks/account/useGetNotiSubscribed";
import { useAppSelector } from "src/state";
import * as Styled from "../index.style";

function Notifications() {
  const { notiSubscribedData } = useGetNotiSubscribed();
  const { email } = useAppSelector((state) => state.auth);

  const [isPushNotiChecked, setIsPushNotiChecked] = useState<boolean>(notiSubscribedData.push);
  const [isMarketingNotiChecked, setIsMarketingNotiChecked] = useState<boolean>(notiSubscribedData.marketing);

  return (
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
  );
}

export default Notifications;
