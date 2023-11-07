import { useCallback, useEffect, useState } from "react";
import { Level, Point } from "../../entities/level";
import { Button } from "../../shared/ui/button/Button";
import Solve from "./Solve";
import { useLevel } from "./hooks";
import { LngLat, YMap } from "@yandex/ymaps3-types";
import DrawerEndGame from "./DrawerEndGame";
import { useNavigate } from "react-router-dom";
import { Timer } from "./Timer";
import { coordsToBounds } from "../../shared/utils";
import { Score } from "./Score";

export function GameScreen() {
  const [tryIndex, setTryIndex] = useState(0);
  const [canGoNext, setCanGoNext] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const { level, levelIndex, goNext, goToFirst } = useLevel();

  const restart = useCallback(() => {
    setTryIndex(tryIndex + 1);
    setScore(0);
    setCanGoNext(false);
    setGameOver(false);
    goToFirst();
  }, [goToFirst, tryIndex]);

  useEffect(() => {
    // @ts-ignore
    (window.mapInstance as YMap).setLocation({
      // @ts-expect-error
      bounds: coordsToBounds(
        level.points.map((point) => point.coords as LngLat, true)
      ),
      duration: 200,
    });
  }, [level.points]);

  return (
    <>
      <Solve
        score={score}
        level={level as Level}
        key={String(`level_${levelIndex}_try_${tryIndex}`)}
        onScoreUpdate={setScore}
        onChangeIsPathFull={setCanGoNext}
      />
      <div className="game-top-ui">
        <div className="back-btn" onClick={() => navigate("/")} />
        <Score score={score} />
        <div className="btn-help" />
      </div>
      <div className="game-bottom-ui">
        <Timer
          key={String(`try_${tryIndex}`)}
          onTimerEnd={() => setGameOver(true)}
        />
        <div className="next">
          <Button
            title="Следующий маршрут"
            type="action"
            helperText={
              !canGoNext
                ? "Соберите полный маршрут чтобы перейти к следующему"
                : undefined
            }
            onClick={() => goNext()}
            disabled={!canGoNext}
          />
        </div>
      </div>
      {gameOver && <DrawerEndGame score={score} onRestartClick={restart} />}
    </>
  );
}
