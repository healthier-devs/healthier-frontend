import axios from "axios";
import { IValidateAccountResponse, IValidatePasswordRequest } from "src/interfaces/account";
import { fetcher } from "../";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  timeout: 1500,
});

export const accountFetcher = {
  validateEmail(email: string): Promise<IValidateAccountResponse> {
    return fetcher.get(`/validate-email?email=${email}`);
  },
  validatePassword(body: IValidatePasswordRequest) {
    return fetcher.post("/validate-password", body);
  },
};
