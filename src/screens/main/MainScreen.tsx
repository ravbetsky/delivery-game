import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { Tutorial } from "../../shared/ui/tutorial";
import { useState } from "react";

export function MainScreen() {
  const navigate = useNavigate();
  const [isTutorialOpened, setTutorialOpened] = useState(false);
  return (
    <div className="cover">
      <div className="main-top-ui">
        <div className="logo" />
      </div>
      <div className="drawer-ui">
        <Button
          title="Начать игру"
          type="action"
          onClick={() => setTutorialOpened(true)}
        />
        <Button title="Лидерборд" onClick={() => navigate("/leaderboard")} />
      </div>
      {isTutorialOpened && <Tutorial onNextClick={() => navigate("/game")} />}
    </div>
  );
}
