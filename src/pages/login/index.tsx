import { useLocation } from "react-router-dom";
import DefaultLogin from "./default";
import ExistingAccount from "./existing";

function Login() {
  const { state } = useLocation();

  return state ? <ExistingAccount type={state.type} /> : <DefaultLogin />;
}

export default Login;
