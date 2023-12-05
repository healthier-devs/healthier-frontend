import { useEffect } from "react";
import { createFCMToken } from "src/api/account/service";
import { IS_TOKEN_CREATED, FCM_TOKEN } from "src/data/account";
import { useAppSelector } from "src/state";

export const useFCMToken = () => {
  const { authenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fcmToken = localStorage.getItem(FCM_TOKEN);

    if (!authenticated || !fcmToken) {
      return;
    }

    createFCMToken(fcmToken);
  }, [authenticated]);
};
