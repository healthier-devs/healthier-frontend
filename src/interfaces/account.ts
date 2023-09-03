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
