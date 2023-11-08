import { Button } from "../button/Button";

type Props = {
  onConfirmClick: VoidFunction;
  onCancelClick: VoidFunction;
};

export function ConfirmBack({ onConfirmClick, onCancelClick }: Props) {
  return (
    <div className="black-drawer-ui">
      <div className="overlay"></div>
      <div className="drawer">
        <h4>Выйти в меню?</h4>
        <p>Если вы выйдете ваш результат не сохранится</p>
        <Button type="outline" title="Хочу выйти" onClick={onConfirmClick} />
        <Button
          type="white-action"
          title="Продолжу играть"
          onClick={onCancelClick}
        />
      </div>
    </div>
  );
}
