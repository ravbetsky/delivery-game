import "./Button.css";

type Props = {
  title: string;
  type?: "default" | "action" | "outline" | "white-action";
  onClick?: () => void;
  disabled?: boolean;
  helperText?: string;
};

export function Button({
  title,
  onClick,
  type = "default",
  disabled,
  helperText,
}: Props) {
  return (
    <button
      className={`button button--${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
      {helperText && <small>{helperText}</small>}
    </button>
  );
}
