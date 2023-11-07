import { useCallback, useEffect, useState } from "react";
import levels from "../../assets/level.json";
import { makeShuffler } from "../../shared/utils";

const INITIAL_SECONDS = 30;
const shuffleLevel = makeShuffler(levels.levels.length - 1);

export const useLevel = () => {
  const [levelIndex, setLevelIndex] = useState(shuffleLevel());

  const goNext = useCallback(() => {
    setLevelIndex(shuffleLevel());
  }, []);

  const goToFirst = useCallback(() => {
    setLevelIndex(0);
  }, []);

  return { level: levels.levels[levelIndex], levelIndex, goNext, goToFirst };
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

  const resetTimer = useCallback(() => {
    setSeconds(INITIAL_SECONDS);
  }, []);

  useEffect(() => {
    async function tickSecond() {
      return new Promise((res) => window.setTimeout(res, 1000));
    }
    if (seconds !== 0) {
      tickSecond().then(() => setSeconds(seconds - 1));
    }
  }, [seconds]);

  return { seconds, resetTimer };
};
