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
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber: string;
  gender: string;
  birthDate: string;
  nickname: string;
  marketingOptIn: boolean;
  healthInterests: string[];
}

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
