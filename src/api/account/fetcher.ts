import {
  IValidateAccountResponse,
  IValidatePasswordRequest,
  ISignUpRequest,
  ILoginRequest,
  ISendVerificationCode,
  IResetPassword,
  INotificationSubscribedResponse,
  IUpdateNotiRequest,
  IUserResponse,
  IUserInfo,
  IInquiry,
  IVerifyAppleCodeResponse,
  TAppleSignUpRequest,
  TKakaoSignUpRequest,
  TAdditionalInformation,
} from "src/interfaces/account";
import { createFetcher, createUnauthorizedFetcher } from "../";

const fetcher = createFetcher("");
const unauthorizedFetcher = createUnauthorizedFetcher("");

export const accountFetcher = {
  validateEmail(email: string): Promise<IValidateAccountResponse> {
    return unauthorizedFetcher.get(`/validate-email/${email}`);
  },
  validatePassword(body: IValidatePasswordRequest) {
    return unauthorizedFetcher.post("/validate-password", body);
  },
  signUpUser(body: ISignUpRequest) {
    return unauthorizedFetcher.post("", body);
  },
  signUpApple(body: TAppleSignUpRequest, accessToken: string) {
    return unauthorizedFetcher.post("/auth/apple/additional-information", body, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  signUpKakao(body: TKakaoSignUpRequest, accessToken: string) {
    return unauthorizedFetcher.post("/auth/kakao/additional-information", body, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  loginUser(body: ILoginRequest) {
    return unauthorizedFetcher.post("/signin", body);
  },
  validateToken() {
    return fetcher.post("/validate-token", {});
  },
  logout() {
    return fetcher.post("/logout");
  },
  sendVerificationCode(body: ISendVerificationCode) {
    return unauthorizedFetcher.post("/send-verification-code", body);
  },
  resetPassword({ userEmail, body }: IResetPassword) {
    return fetcher.put(`/${userEmail}/reset-password`, body);
  },
  getUserData(): Promise<IUserInfo> {
    return fetcher.get("/me");
  },
  getIsNotificationSubscribed(): Promise<INotificationSubscribedResponse> {
    return fetcher.get("/push-notification");
  },
  updateMarketingSubscribed({ subscribed }: IUpdateNotiRequest): Promise<IUserResponse> {
    return fetcher.patch("/marketing", { subscribed });
  },
  updatePushSubscribed({ subscribed }: IUpdateNotiRequest): Promise<IUserResponse> {
    return fetcher.patch("/push-notification", { subscribed });
  },
  postInquiry(body: IInquiry) {
    return fetcher.post("/inquiry", body);
  },
  getImageRoute() {
    return unauthorizedFetcher.get("/inquiry/image");
  },
  getKakaoAuth(code: string) {
    return unauthorizedFetcher.get(`/auth/kakao?code=${code}`);
  },
  authorizeApple(code: string): Promise<IVerifyAppleCodeResponse> {
    return unauthorizedFetcher.get(`/auth/apple?code=${code}`);
  },
  postFCMToken(fcmToken: string): Promise<IValidateAccountResponse> {
    return fetcher.post("/fcmtoken", { fcmToken });
  },
  getFCMToken() {
    return fetcher.get("/fcmtoken");
  },
};
