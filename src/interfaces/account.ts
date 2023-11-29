export interface IValidateAccountResponse {
  data: string;
  success: boolean;
  timestamp: string;
  cause?: string;
  path?: string;
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

export type TAppleSignUpRequest = Omit<ISignUpRequest, "username" | "password" | "confirmPassword">;
export type TKakaoSignUpRequest = Omit<ISignUpRequest, "username" | "password" | "confirmPassword" | "name" | "gender" | "birthDate">;

export type TAdditionalInformation = Pick<ISignUpRequest, "name" | "gender" | "birthDate" | "healthInterests" | "invitationCode">;

export type TSocialJoin = {
  type: "kakao" | "apple";
  user: Pick<ISignUpRequest, "marketingOptIn">;
  accessToken: string;
  refreshToken: string;
};

export type TLocalJoin = {
  type: "local";
  user: Pick<ISignUpRequest, "username" | "password" | "confirmPassword" | "marketingOptIn">;
};

export type TAppleSignUp = {
  type: "apple";
  body: TAppleSignUpRequest;
  accessToken: string;
};

export type TKakaoSignUp = {
  type: "kakao";
  body: TKakaoSignUpRequest;
  accessToken: string;
};
export type TLocalSignUp = {
  type: "local";
  body: ISignUpRequest;
};

export type TSignUp = TAppleSignUp | TKakaoSignUp | TLocalSignUp;

export type TAdditionalInformationParam = TSocialJoin | TLocalJoin;

export type TJoinType = TAdditionalInformationParam["type"];

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

export interface ICheckVerificationCode {
  email: string;
  code: string;
}

export type TResetPasswordBody = Omit<IValidatePasswordRequest, "email">;
export interface IResetPassword {
  userEmail: string;
  body: TResetPasswordBody;
}

export interface INotificationSubscribedResponse {
  marketing: boolean;
  pushNotification: boolean;
}

export interface IUpdateNotiRequest {
  subscribed: boolean;
}

export interface IUserInfo {
  name: string;
  username: string;
  gender: string;
  age: number;
  healthInterests: string[];
}

export interface IInquiry {
  category: string;
  title: string;
  content: string;
  images: any[];
}

export interface IAppleAuthorizationSuccess {
  authorization: {
    code: string;
    id_token: string;
    state: string;
  };
}

export interface IAppleAuthorizationError {
  error: {
    error: string;
  };
}

export interface IVerifyAppleCodeResponse {
  accessToken: string;
  refreshToken: string;
  hasAdditionalInformation: boolean;
  isAlreadyRegistered: boolean;
  registerType: "KAKAO" | "APPLE" | "DEFAULT";
}
export interface IEmailFind {
  name: string;
  birthDate: string;
  gender: "m" | "f";
}

export interface IWithDrawlBody {
  reason: string;
}
