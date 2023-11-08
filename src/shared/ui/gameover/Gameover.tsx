import { Button } from "../button/Button";
import pathToThumbub from "../../../assets/thumbup.png";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import useLocalStorage from "react-use-localstorage";
import { db } from "../../../firebase-config";
import { useCallback, useEffect } from "react";

export function Gameover({
  score,
  onRestartClick,
  onMenuClick,
}: {
  score: number;
  onRestartClick: VoidFunction;
  onMenuClick: VoidFunction;
}) {
  const [currentPlayerID] = useLocalStorage("playerID");
  const playerDocRef = doc(db, "players", currentPlayerID);

  const updateScore = useCallback(async () => {
    const playerDocSnap = await getDoc(playerDocRef);
    // @ts-expect-error
    const { score: prevScore } = playerDocSnap.data();

    if (!prevScore || score > prevScore) {
      const playerDoc = doc(db, "players", currentPlayerID);
      await updateDoc(playerDoc, { score });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  useEffect(() => {
    updateScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="black-drawer-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <img className="thumbup-image" src={pathToThumbub} />
        <div className="back" onClick={onMenuClick}></div>
        <h3>{score}</h3>
        <h4>Заказов доставлено</h4>
        <p>Отличный результат!</p>
        <p>
          Если тебе понравилось строить оптимальные маршруты, приходи к нам
          решать аналогичные задачи
        </p>
        <Button
          type="outline"
          title="Хочу работать в Доставке"
          onClick={() =>
            window.open("https://yandex.ru/jobs/services/dostavka", "_blank")
          }
        />
        <Button
          type="white-action"
          title="Играть ещё"
          onClick={onRestartClick}
        />
      </div>
    </div>
  );
}

export default Gameover;
