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
