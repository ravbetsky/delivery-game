import { Button } from "../button/Button";
import { useCallback, useRef, useState } from "react";
import { Logo } from "../logo/Logo";
import useLocalStorage from "react-use-localstorage";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase-config";

export type Props = {
  onNextClick: VoidFunction;
  onBackClick: VoidFunction;
};

export function Login({ onNextClick, onBackClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [, setPlayerID] = useLocalStorage("playerID");
  const playerCollectionRef = collection(db, "players");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createPlayer = async () => {
    return await addDoc(playerCollectionRef, { name: inputValue });
  };

  const handleNextClick = useCallback(async () => {
    try {
      const doc = await createPlayer();
      setPlayerID(doc.id);
      onNextClick();
    } catch (err) {
      console.error(err);
    }
  }, [createPlayer, onNextClick, setPlayerID]);

  return (
    <div ref={ref} className="screen-right login">
      <header>
        <Logo />
        <hgroup>
          <h3>
            Добро пожаловать
            <br />в игру Яндекс Доставки!
          </h3>
          <h5>
            Введите ваш логин в Telegram, чтобы мы могли связаться с вами для
            вручения приза
          </h5>
        </hgroup>
        <a
          className="chevron-link"
          href="https://yandex.ru/jobs/services/dostavka?utm_source=matmar_game"
          target="_blank"
        >
          Хочу работать в Доставке
        </a>
      </header>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Введите логин"
      />
      <div className="screen-right-action">
        <Button title="Назад" onClick={onBackClick} />
        <Button
          type="action"
          title="Продолжить"
          onClick={handleNextClick}
          disabled={!inputValue.trim()}
        />
      </div>
    </div>
  );
}
