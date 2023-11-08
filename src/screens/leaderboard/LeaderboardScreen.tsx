import { useNavigate } from "react-router-dom";
import { Leaderboard } from "../../shared/ui/leaderboard";
import useLocalStorage from "react-use-localstorage";

export function LeaderboardScreen() {
  const navigate = useNavigate();
  const [playerID] = useLocalStorage("playerID");
  return (
    <Leaderboard
      onPlayClick={() => (playerID ? navigate("/game") : navigate("/login"))}
      onMenuClick={() => navigate("/")}
    />
  );
}
