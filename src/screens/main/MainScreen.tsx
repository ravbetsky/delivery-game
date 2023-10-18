import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";

export function MainScreen() {
  const navigate = useNavigate();
  return (
    <div className="drawer-ui">
      <Button
        title="Начать игру"
        type="action"
        onClick={() => navigate("/game")}
      />
      <Button title="Лидерборд" onClick={() => navigate("/leaderboard")} />
    </div>
  );
}
