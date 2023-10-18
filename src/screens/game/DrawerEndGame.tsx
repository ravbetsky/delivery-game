import { Button } from "../../shared/ui/button/Button";

function DrawerEndGame({
  score,
  onRestartClick,
}: {
  score: number;
  onRestartClick: VoidFunction;
}) {
  return (
    <div className="end-game-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h3>{score}</h3>
        <h4>заказов доставлено</h4>
        <p>Отличный результат!</p>
        <Button title="Играть ещё" onClick={onRestartClick} />
      </div>
    </div>
  );
}

export default DrawerEndGame;
