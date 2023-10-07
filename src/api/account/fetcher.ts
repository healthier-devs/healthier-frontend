import { IValidateAccountResponse, IValidatePasswordRequest, ISignUpRequest, ILoginRequest } from "src/interfaces/account";
import { createFetcher, createUnauthorizedFetcher } from "../";

const fetcher = createFetcher("");
const unauthorizedFetcher = createUnauthorizedFetcher("");

export const accountFetcher = {
  validateEmail(email: string): Promise<IValidateAccountResponse> {
    return fetcher.get(`/validate-email/${email}`);
  },
  validatePassword(body: IValidatePasswordRequest) {
    return fetcher.post("/validate-password", body);
  },
  signUpUser(body: ISignUpRequest) {
    return unauthorizedFetcher.post("", body);
  },
  loginUser(body: ILoginRequest) {
    return unauthorizedFetcher.post("/signin", body);
  },
};
