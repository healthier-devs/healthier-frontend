import { useEffect, useState } from "react";
import { mypageFetcher } from "src/api/mypage/fetcher";
import FlexBox from "src/components/flexBox";
import Switch from "src/components/switch";
import { useGetAlarmStatus } from "src/hooks/mypage/useGetAlarmStatus";
import { usePostAlarmStatus } from "src/hooks/mypage/usePostAlarmStatus";
import * as Styled from "../index.style";

function Notifications() {
  const [isPushNotiChecked, setIsPushNotiChecked] = useState<boolean>(false);
  const [isMarketingNotiChecked, setIsMarketingNotiChecked] = useState<boolean>(false);
  const { alarmStatusData, isLoading } = useGetAlarmStatus();

  const { postAlarmStatus } = usePostAlarmStatus({
    userEmail: "moonki0623@naver.com",
    marketingData: isLoading ? false : !alarmStatusData?.marketing.status,
  });

  useEffect(() => {
    console.log(alarmStatusData);
  }, [isLoading]);

  return isLoading ? (
    <Styled.Box padding="3.2rem 2.4rem 2.4rem">
      <Styled.Box mb="1.6rem">
        <Styled.Typography className="title-1">앱 푸시 알림 설정</Styled.Typography>
      </Styled.Box>

      <Styled.Box mb="1.8rem">
        <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
          <Styled.Typography className="title-2">앱 푸시 알림 동의</Styled.Typography>
          <Switch checked={false} />
        </FlexBox>
        <Styled.Typography className="description">서비스와 관련된 모든 알림을 수신해요</Styled.Typography>
      </Styled.Box>

      <Styled.Box>
        <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
          <Styled.Typography className="title-2">마케팅 알림 동의</Styled.Typography>
          <Switch checked={false} />
        </FlexBox>
        <Styled.Typography className="description">마케팅 정보 수신에 동의해요</Styled.Typography>
      </Styled.Box>
    </Styled.Box>
  ) : (
    <Styled.Box padding="3.2rem 2.4rem 2.4rem">
      <Styled.Box mb="1.6rem">
        <Styled.Typography className="title-1">앱 푸시 알림 설정</Styled.Typography>
      </Styled.Box>

      <Styled.Box mb="1.8rem">
        <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
          <Styled.Typography className="title-2">앱 푸시 알림 동의</Styled.Typography>
          <Switch checked={alarmStatusData?.push.status} onClick={() => setIsPushNotiChecked(!isPushNotiChecked)} />
        </FlexBox>
        <Styled.Typography className="description">서비스와 관련된 모든 알림을 수신해요</Styled.Typography>
      </Styled.Box>

      <Styled.Box>
        <FlexBox alignItems="center" justifyContent="space-between" mb="4px">
          <Styled.Typography className="title-2">마케팅 알림 동의</Styled.Typography>
          <Switch checked={alarmStatusData?.marketing.status} onClick={() => postAlarmStatus()} />
        </FlexBox>
        <Styled.Typography className="description">마케팅 정보 수신에 동의해요</Styled.Typography>
      </Styled.Box>
    </Styled.Box>
  );
}

export default Notifications;
