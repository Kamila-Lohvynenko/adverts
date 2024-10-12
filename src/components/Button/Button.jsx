import clsx from "clsx/lite";
import css from "./Button.module.css";

const Button = ({ text, onClick, classCss, isDisabled = false }) => {
  const className = clsx(css.button, classCss && css[classCss]);

  return (
    <button
      className={className}
      onClick={onClick}
      type="submit"
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
