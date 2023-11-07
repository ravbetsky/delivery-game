/* eslint-disable */
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { useState } from "react";

export function LeaderboardScreen() {
  const navigate = useNavigate();
  const [leaderboard] = useState([]);

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
                {/* @ts-ignore */}
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
