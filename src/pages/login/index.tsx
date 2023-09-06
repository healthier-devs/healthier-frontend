import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultLogin from "./default";
import ExistingAccount from "./existing";

function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state && !state.email) {
      navigate("/");
    }
  }, [state, navigate]);

  return state ? <ExistingAccount email={state.email} /> : <DefaultLogin />;
}

export default Login;
