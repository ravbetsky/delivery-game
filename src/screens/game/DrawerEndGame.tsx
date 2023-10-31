import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { useEffect } from "react";

function DrawerEndGame({
  score,
  onRestartClick,
}: {
  score: number;
  onRestartClick: VoidFunction;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    // @ts-ignore
    window.ysdk.getLeaderboards().then((lb) => {
      // Без extraData
      lb.setLeaderboardScore("parcelsCount", score);
      // С extraData
    });
  }, []);

  return (
    <div className="end-game-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h3>{score}</h3>
        <h4>заказов доставлено</h4>
        <p>Отличный результат!</p>
        <Button type="action" title="Играть ещё" onClick={onRestartClick} />
        <Button title="Лидерборды" onClick={() => navigate("/leaderboard")} />
        <Button title="В меню" onClick={onRestartClick} />
      </div>
    </div>
  );
}

export default DrawerEndGame;