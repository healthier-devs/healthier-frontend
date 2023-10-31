export interface IValidateAccountResponse {
  data: string;
  success: boolean;
  timestamp: string;
  cause: string;
  path: string;
}

export interface IValidatePasswordRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpRequest {
  username: string; // 이메일
  password: string;
  confirmPassword: string;
  name: string; // 사용자 실명
  gender: "f" | "m";
  birthDate: string; // yyyy-mm-dd
  marketingOptIn: boolean;
  healthInterests: string[];
  invitationCode: string; // 없으면 빈 문자열
}

export type TAdditionalInformation = Pick<ISignUpRequest, "name" | "gender" | "birthDate" | "healthInterests" | "invitationCode">;

export type TAdditionalInformationParam = Pick<ISignUpRequest, "username" | "password" | "confirmPassword" | "marketingOptIn">;

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IException {
  code: number;
  message: string;
}

export interface IValidateTokenResponse {
  data: string;
  success: boolean;
  timestamp: string;
}

export interface IUserResponse {
  data: string;
  success: boolean;
  timestamp: string;
}

export interface ISendVerificationCode {
  email: string;
}

export type TResetPasswordBody = Omit<IValidatePasswordRequest, "email">;
export interface IResetPassword {
  userEmail: string;
  body: TResetPasswordBody;
}

export interface INotificationSubscribedResponse {
  status: boolean;
}

export interface IUpdateMarketingSubscribedRequest {
  userEmail: string;
  subscribed: boolean;
}
