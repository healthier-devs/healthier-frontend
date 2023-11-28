import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { IS_TOKEN_CREATED } from "src/data/account";
import { accountFetcher } from "./fetcher";
import type {
  IValidateAccountResponse,
  IValidatePasswordRequest,
  ILoginRequest,
  ILoginResponse,
  IException,
  IUserResponse,
  ISendVerificationCode,
  IResetPassword,
  TSignUp,
} from "src/interfaces/account";

export const validateEmail = async (email: string) => {
  try {
    const validationData = await accountFetcher.validateEmail(email);

    return validationData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.BAD_REQUEST) {
        return err.response.data as IValidateAccountResponse;
      }
    }

    throw new Error();
  }
};

export const validatePassword = async (body: IValidatePasswordRequest) => {
  try {
    const validationData = await accountFetcher.validatePassword(body);

    return validationData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.BAD_REQUEST) {
        return err.response.data as IValidateAccountResponse;
      }
    }

    throw new Error();
  }
};

export const signup = async (signupParam: TSignUp): Promise<IValidateAccountResponse> => {
  const { type, body } = signupParam;

  try {
    if (type === "apple") {
      const signupData = await accountFetcher.signUpApple(body, signupParam.accessToken);

      return signupData;
    } else if (type === "local") {
      const signupData = await accountFetcher.signUpUser(body);

      return signupData;
    } else {
      const signupData = await accountFetcher.signUpKakao(body);

      return signupData;
    }
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.BAD_REQUEST) {
        return err.response.data as IValidateAccountResponse;
      }
    }

    throw new Error();
  }
};

export const loginUser = async (body: ILoginRequest): Promise<ILoginResponse | IException> => {
  try {
    const loginData = await accountFetcher.loginUser(body);

    return loginData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.UNAUTHORIZED) {
        return err.response.data as IException;
      }
    }

    throw new Error();
  }
};

export const validateToken = async (): Promise<IUserResponse | IException> => {
  try {
    const validationData = await accountFetcher.validateToken();

    return validationData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.UNAUTHORIZED || status === StatusCodes.FORBIDDEN) {
        return err.response.data as IException;
      }
    }

    throw new Error();
  }
};

export const logout = async (): Promise<IUserResponse | IException> => {
  try {
    const logoutData = await accountFetcher.logout();

    return logoutData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.UNAUTHORIZED || status === StatusCodes.FORBIDDEN) {
        return err.response.data as IException;
      }
    }

    throw new Error();
  }
};

export const sendVerificationCode = async (body: ISendVerificationCode): Promise<{ code: string }> => {
  const { data } = await accountFetcher.sendVerificationCode(body);
  const tokens = data.split(" ");

  return {
    code: tokens[tokens.length - 1],
  };
};

export const resetPassword = async (resetPasswordParam: IResetPassword): Promise<IUserResponse> => {
  try {
    const resetPasswordData = await accountFetcher.resetPassword(resetPasswordParam);

    return resetPasswordData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.BAD_REQUEST) {
        return err.response.data as IUserResponse;
      }
    }

    throw new Error();
  }
};

export const getUserData = async () => {
  try {
    const userData = await accountFetcher.getUserData();

    return userData;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      const { status } = err.response;

      if (status === StatusCodes.UNAUTHORIZED || status === StatusCodes.FORBIDDEN) {
        return err.response.data as IException;
      }
    }

    throw new Error();
  }
};

export const getKakaoAuthData = async () => {
  const url = new URL(window.location.href);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  await accountFetcher.getKakaoAuth(url.searchParams.get("code")!);
};

export const createFCMToken = async (fcmToken: string) => {
  try {
    await accountFetcher.postFCMToken(fcmToken);
    localStorage.setItem(IS_TOKEN_CREATED, "true");
  } catch (err) {
    throw new Error();
  }
};
