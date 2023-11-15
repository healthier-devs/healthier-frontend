import { useNavigate } from "react-router-dom";

export const useHeaderNavigation = () => {
  const navigate = useNavigate();

  const handleClickBack = () => navigate(-1);
  const handleClickExit = () => navigate("/");

  return {
    handleClickBack,
    handleClickExit,
  };
};
