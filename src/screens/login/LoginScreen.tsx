import { useNavigate } from "react-router-dom";
import { Login } from "../../shared/ui/login";

export function LoginScreen() {
  const navigate = useNavigate();
  return <Login onNextClick={() => navigate("/game")} onBackClick={() => navigate("/")} />;
}
