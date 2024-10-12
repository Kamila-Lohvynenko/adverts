import clsx from "clsx/lite";
import sprite from "../../images/sprite.svg";
import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ onClick, isFavorite }) => {
  const className = clsx(css.icon, isFavorite && css.favorite);

  return (
    <button type="button" onClick={onClick} className={css.button}>
      <svg className={className}>
        <use href={`${sprite}#icon-heart`} />
      </svg>
    </button>
  );
};

export default FavoriteButton;
