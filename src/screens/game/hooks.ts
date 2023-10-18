import { useCallback, useEffect, useState } from "react";
import levels from "../../assets/level.json";

const INITIAL_SECONDS = 30;
// const LAST_SECONDS = 5;

export const useLevel = () => {
  const [levelIndex, setLevelIndex] = useState(3);
  const goNext = useCallback(() => {
    setLevelIndex(levelIndex + 1);
  }, [levelIndex]);

  return { level: levels.levels[levelIndex], levelIndex, goNext };
};

export function useSolve({
  score,
  onScoreUpdate,
}: {
  score: number;
  onScoreUpdate: (newScore: number) => void;
}) {
  const [currentScore, setScore] = useState<number>(score);
  const [solveStack, setSolveCurve] = useState<string[]>([]);

  const pushPoint = useCallback(
    (pointId: string, weight: number) => {
      const newScore = currentScore + weight;
      setScore(newScore);
      onScoreUpdate(newScore);
      setSolveCurve([...solveStack, pointId]);
    },
    [onScoreUpdate, currentScore, solveStack]
  );

  const popPoint = useCallback(
    (weight: number) => {
      const newScore = currentScore - weight;
      setScore(newScore);
      onScoreUpdate(newScore);
      setSolveCurve(solveStack.slice(0, -1));
    },
    [onScoreUpdate, currentScore, solveStack]
  );

  return {
    solveStack,
    pushPoint,
    popPoint,
  };
}

export const useTimer = () => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    async function tickSecond() {
      return new Promise((res) => window.setTimeout(res, 1000));
    }
    if (seconds !== 0) {
      tickSecond().then(() => setSeconds(seconds - 1));
    }
  }, [seconds]);

  return seconds;
};
