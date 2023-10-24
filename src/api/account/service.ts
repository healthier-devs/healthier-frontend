import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { accountFetcher } from "./fetcher";
import type {
  ISignUpRequest,
  IValidateAccountResponse,
  IValidatePasswordRequest,
  ILoginRequest,
  ILoginResponse,
  IException,
  IUserResponse,
  ISendVerificationCode,
  IResetPassword,
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

export const signup = async (body: ISignUpRequest): Promise<IValidateAccountResponse> => {
  try {
    const signupData = await accountFetcher.signUpUser(body);

    return signupData;
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
