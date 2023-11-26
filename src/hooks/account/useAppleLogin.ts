export const useAppleLogin = () => {
  const handleClickAppleLogin = () => {
    window.open(process.env.REACT_APP_APPLE_LOGIN_URL, "_blank", "noopener, noreferrer");
  };

  return { handleClickAppleLogin };
};
