import { Button } from "../button/Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "../logo/Logo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import useLocalStorage from "react-use-localstorage";

export type Props = {
  onPlayClick: VoidFunction;
  onMenuClick: VoidFunction;
};

export function Leaderboard({ onPlayClick, onMenuClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const playersCollectionRef = collection(db, "players");
  const [currentPlayerID] = useLocalStorage("playerID");
  const [allPlayers, setAllPlayers] = useState([]);
  const leaderboardPlayers = useMemo(() => {
    if (allPlayers) {
      return (
        allPlayers
          // @ts-expect-error
          .filter((player) => player.score && player.score > 0)
          // @ts-expect-error
          .sort((playerA, playerB) => playerB.score - playerA.score)
      );
    }
    return [];
  }, [allPlayers]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await getDocs(playersCollectionRef);
      // @ts-expect-error
      setAllPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="screen-right leaderboard">
      <header>
        <Logo />
        <hgroup>
          <h3>Лидерборд</h3>
          <h5>Список текущих победителей</h5>
        </hgroup>
      </header>
      {leaderboardPlayers.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <ul className="top-players">
          {leaderboardPlayers.map((player, index) => (
            <li
              key={`player_${index}`}
              /* @ts-expect-error */
              className={currentPlayerID === player.id ? "me" : ""}
            >
              <span>
                {index === 0 ? `👑 ` : ""}
                {/* @ts-expect-error */}
                {player.name}
              </span>
              {/* @ts-expect-error */}
              <span>{player.score}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="screen-right-action">
        <Button type="default" title="Назад" onClick={onMenuClick} />
        <Button type="action" title="Играть" onClick={onPlayClick} />
      </div>
    </div>
  );
}
