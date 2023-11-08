import tutorVideoURL from "../../../assets/tutor.mp4";
import { Button } from "../button/Button";

type Props = {
  onNextClick: VoidFunction;
};

export function Tutorial({ onNextClick }: Props) {
  return (
    <div className="black-drawer-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h4>Как играть?</h4>
        <video controls={undefined} autoPlay loop>
          <source src={tutorVideoURL} type="video/mp4" />
        </video>
        <p>
          Строй маршруты через точки, так чтобы собрать{" "}
          <b>наибольшее количество посылок</b>.
        </p>
        <p>
          У тебя есть только <b>30 секунд</b>!
        </p>
        <Button
          type="white-action"
          title="Всё понятно, го играть!"
          onClick={onNextClick}
        />
      </div>
    </div>
  );
}
