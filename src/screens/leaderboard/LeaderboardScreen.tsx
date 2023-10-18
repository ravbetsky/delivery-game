import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";

export function LeaderboardScreen() {
  const navigate = useNavigate();
  return (
    <div className="end-game-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h4>Таблица лидеров</h4>
        <p>Здесь пока никого нет</p>
        <Button title="В меню" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}
