import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";

export function MainScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title-word">
        <span className="title-word-1">Собери</span>{" "}
        <span className="title-word-2">посылки</span>
      </h1>
      <div className="drawer-ui">
        <Button
          title="Начать игру"
          type="action"
          onClick={() => navigate("/tutorial")}
        />
        <Button title="Лидерборд" onClick={() => navigate("/leaderboard")} />
      </div>
    </div>
  );
}
