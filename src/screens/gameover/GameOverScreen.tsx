import { useLocation } from "react-router-dom";

export function GameOverScreen() {
  const location = useLocation();
  return <h1>{location.state.score}</h1>;
}
