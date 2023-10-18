import { useNavigate } from "react-router-dom";
import tutorVideoURL from "../../assets/tutor.mp4";
import { Button } from "../../shared/ui/button/Button";

export function TutorialScreen() {
  const navigate = useNavigate();
  return (
    <div className="end-game-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h4>Как играть?</h4>
        <video autoPlay loop>
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
          title="Всё понятно, го играть!"
          onClick={() => navigate("/game")}
        />
      </div>
    </div>
  );
}
