import { Button } from "../button/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "../logo/Logo";
import useLocalStorage from "react-use-localstorage";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export type Props = {
  onSaveClick: VoidFunction;
  onBackClick: VoidFunction;
};

export function Settings({ onSaveClick, onBackClick }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [currentPlayerID] = useLocalStorage("playerID");
  const playerDocRef = doc(db, "players", currentPlayerID);
  const [currentPlayerName, setCurrentPlayerName] = useState();
  const [inputValue, setInputValue] = useState('');
  console.log(currentPlayerID)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentPlayerData = async () => {
    const playerDocSnap = await getDoc(playerDocRef);
    // @ts-expect-error
    const { name } = playerDocSnap.data();
    setCurrentPlayerName(name);
    setInputValue(name)
  };

  const updateName = useCallback(async () => {
    const playerDoc = doc(db, "players", currentPlayerID);
    await updateDoc(playerDoc, { name: inputValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleSaveClick = useCallback(async () => {
    try {
      await updateName();
      onSaveClick();
    } catch (err) {
      console.error(err);
    }
  }, [onSaveClick, updateName]);

  useEffect(() => {
    getCurrentPlayerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="screen-right settings">
      <header>
        <Logo />
        <hgroup>
          <h3>Настройки</h3>
        </hgroup>
      </header>
      <label>Ваш логин</label>
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
          title="Сохранить"
          onClick={handleSaveClick}
          disabled={!inputValue.trim() || currentPlayerName === inputValue}
        />
      </div>
    </div>
  );
}
