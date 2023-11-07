import { useEffect } from "react";
import { useTimer } from "./hooks";
import { formatTimer } from "./utils";

type Props = {
  onTimerEnd: VoidFunction;
};

export function Timer({ onTimerEnd }: Props) {
  const { seconds } = useTimer();

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
