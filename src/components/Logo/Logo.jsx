import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <svg className={css.logo}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </Link>
    </>
  );
};

export default Logo;
