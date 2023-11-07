import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Props = {
  score: number;
};

const DURATION = 500;

export function Score({ score }: Props) {
  const scoreElementRef = useRef<HTMLDivElement>();
  const prevRef = useRef<number>(0);
  const [newScore, setNewScore] = useState(0);

  useEffect(() => {
    scoreElementRef.current?.classList.add("animate-pop");
    setNewScore(score);
    // Компонент react-countup не умеет синхронизировать стейт через колбэки
    setTimeout(() => {
      scoreElementRef.current?.classList.remove("animate-pop");
      prevRef.current = newScore;
    }, DURATION);
  }, [newScore, score]);

  return (
    <div ref={scoreElementRef} className="score">
      <CountUp
        start={prevRef.current}
        end={newScore}
        duration={DURATION / 1000}
      />
    </div>
  );
}
