import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { Logo } from "../../shared/ui/logo/Logo";
import useLocalStorage from "react-use-localstorage";

export function MainScreen() {
  const [playerID] = useLocalStorage("playerID");
  const navigate = useNavigate();
  return (
    <div className="cover">
      <div className="main-top-ui">
        <Logo />
      </div>
      <div className="drawer-ui">
        <Button title="Лидерборд" onClick={() => navigate("/leaderboard")} />
        {playerID && (
          <Button title="Настройки" onClick={() => navigate("/settings")} />
        )}
        <Button
          title="Начать игру"
          type="action"
          onClick={() => (playerID ? navigate("/game") : navigate("/login"))}
        />
      </div>
    </div>
  );
}
