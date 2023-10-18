import { useCallback, useEffect, useState } from "react";
import { Level } from "../../models/level/type";
import { Button } from "../../shared/ui/button/Button";
import Solve from "./Solve";
import { useLevel, useTimer } from "./hooks";
import { formatTimer } from "./utils";
import { LngLat, YMap } from "@yandex/ymaps3-types";
import DrawerEndGame from "./DrawerEndGame";

export function GameScreen() {
  const [canGoNext, setCanGoNext] = useState(false);
  const [score, setScore] = useState(0);
  const { level, levelIndex, goNext, goToFirst } = useLevel();
  const {seconds, resetTimer} = useTimer();

  const restart = useCallback(() => {
    setScore(0);
    setCanGoNext(false);
    goToFirst();
    resetTimer()
  }, [goToFirst, resetTimer]);

  useEffect(() => {
    // @ts-ignore
    (window.mapInstance as YMap).setLocation({
      bounds: level.bounds,
      center: level.center as LngLat,
      zoom: level.zoom,
      duration: 200,
    });
  }, [level.bounds, level.center, level.zoom]);

  return (
    <>
      <Solve
        score={score}
        level={level as Level}
        key={String(`level_${levelIndex}`)}
        onScoreUpdate={setScore}
        onChangeIsPathFull={setCanGoNext}
      />
      <div className="game-top-ui">
        <div className="score">{score}</div>
      </div>
      <div className="game-bottom-ui">
        <div className={`timer ${seconds < 10 ? "alert" : ""}`}>
          {formatTimer(seconds)}
        </div>
        <div className="next">
          <Button
            title="Следующий маршрут"
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
      {seconds === 0 && (
        <DrawerEndGame score={score} onRestartClick={restart} />
      )}
    </>
  );
}
