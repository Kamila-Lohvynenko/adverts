import css from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={css.button} onClick={onClick} type="submit">
      {text}
    </button>
  );
};

export default Button;
