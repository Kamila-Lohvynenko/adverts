import clsx from "clsx/lite";
import css from "./Button.module.css";

const Button = ({ text, onClick, classCss }) => {
  const className = clsx(css.button, classCss && css[classCss]);

  return (
    <button className={className} onClick={onClick} type="submit">
      {text}
    </button>
  );
};

export default Button;
