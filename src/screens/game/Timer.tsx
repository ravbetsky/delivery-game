import { useEffect } from "react";
import { useTimer } from "./hooks";
import { formatTimer } from "./utils";

type Props = {
  isPaused?: boolean;
  onTimerEnd: VoidFunction;
};

export function Timer({ onTimerEnd, isPaused = false }: Props) {
  const { seconds } = useTimer(isPaused);

  useEffect(() => {
    if (seconds === 0) {
      onTimerEnd();
    }
  }, [onTimerEnd, seconds]);

  return (
    <div className={`timer ${seconds < 10 ? "alert" : ""}`}>
      {formatTimer(seconds)}
    </div>
  );
}
