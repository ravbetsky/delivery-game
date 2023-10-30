import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { useEffect, useState } from "react";

export function LeaderboardScreen() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    window.ysdk.getLeaderboards().then((lb) => {
      lb.getLeaderboardEntries("parcelsCount", {
        quantityTop: 15,
        includeUser: true,
        quantityAround: 3,
      }).then((res) => setLeaderboard(res.entries));
    });
  }, []);

  return (
    <div className="end-game-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h4>Таблица лидеров</h4>
        {leaderboard.length === 0 ? (
          <p>Здесь пока никого нет</p>
        ) : (
          <ul>
            {leaderboard.map((lb) => (
              <li>
                <strong>{lb.score}</strong> {lb.publicName}
              </li>
            ))}
          </ul>
        )}
        <Button title="В меню" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}
