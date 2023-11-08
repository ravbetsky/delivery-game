import { useCallback, useEffect, useState } from "react";
import { Level } from "../../types";
import { Button } from "../../shared/ui/button/Button";
import Solve from "./Solve";
import { useLevel } from "./hooks";
import { LngLat, YMap } from "@yandex/ymaps3-types";
import { useNavigate } from "react-router-dom";
import { Timer } from "./Timer";
import { coordsToBounds } from "../../shared/utils";
import { Score } from "./Score";
import { Tutorial } from "../../shared/ui/tutorial";
import { ConfirmBack } from "../../shared/ui/confirm-back";
import useLocalStorage from "react-use-localstorage";
import { Gameover } from "../../shared/ui/gameover";

export function GameScreen() {
  const [tryIndex, setTryIndex] = useState(0);
  const [showTutorialFirst, setShowTutorialFirst] = useLocalStorage(
    "showTutorialFirst",
    "1"
  );
  const [showBackConfirm, setShownBackConfirm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(
    Boolean(Number(showTutorialFirst))
  );
  const [canGoNext, setCanGoNext] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const isGamePaused = showBackConfirm || showTutorial;
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
        <div className="back-btn" onClick={() => setShownBackConfirm(true)} />
        <Score score={score} />
        <div className="btn-help" onClick={() => setShowTutorial(true)} />
      </div>
      <div className="game-bottom-ui">
        <Timer
          key={String(`try_${tryIndex}`)}
          onTimerEnd={() => setGameOver(true)}
          isPaused={isGamePaused}
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
      {gameOver && (
        <Gameover
          score={score}
          onRestartClick={restart}
          onMenuClick={() => navigate("/")}
        />
      )}
      {showTutorial && (
        <Tutorial
          onNextClick={() => {
            setShowTutorial(false);
            setShowTutorialFirst("0");
          }}
        />
      )}
      {showBackConfirm && (
        <ConfirmBack
          onCancelClick={() => setShownBackConfirm(false)}
          onConfirmClick={() => navigate("/")}
        />
      )}
    </>
  );
}
