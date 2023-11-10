import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { Logo } from "../../shared/ui/logo/Logo";
import useLocalStorage from "react-use-localstorage";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function MainScreen() {
  const [playerID, setPlayerID] = useLocalStorage("playerID");
  const [isLogined, setIsLogined] = useState(!!playerID);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayer = async () => {
      const playerDocRef = doc(db, "players", playerID);
      const player = await getDoc(playerDocRef);
      if (!player.exists()) {
        setPlayerID("");
        setIsLogined(false);
      } else {
        setIsLogined(true);
      }
    };
    getPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cover">
      <div className="main-top-ui">
        <Logo />
      </div>
      <div className="drawer-ui">
        <Button title="Лидерборд" onClick={() => navigate("/leaderboard")} />
        {isLogined   && (
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
