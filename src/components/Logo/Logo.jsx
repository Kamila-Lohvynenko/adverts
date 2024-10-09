import sprite from "../../images/sprite.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <svg className={css.logo}>
        <use href={`${sprite}#icon-logo`} />
      </svg>
    </>
  );
};

export default Logo;
