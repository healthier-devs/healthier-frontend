import axios from "axios";
import { IValidateAccountResponse, IValidatePasswordRequest, ISignUpRequest, ILoginRequest } from "src/interfaces/account";
import { fetcher } from "../";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  timeout: 1500,
});

export const accountFetcher = {
  validateEmail(email: string): Promise<IValidateAccountResponse> {
    return fetcher.get(`/validate-email/${email}`);
  },
  validatePassword(body: IValidatePasswordRequest) {
    return fetcher.post("/validate-password", body);
  },
  signUpUser(body: ISignUpRequest) {
    return fetcher.post("", body);
  },
  loginUser(body: ILoginRequest) {
    return fetcher.post("/signin", body);
  },
};
