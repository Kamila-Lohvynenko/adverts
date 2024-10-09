import css from "./BadgesContainer.module.css";
import sprite from "../../images/sprite.svg";

const BadgesContainer = ({ badge }) => {
  return (
    <div className={css.container}>
      <svg height={20} width={20}>
        <use href={`${sprite}#icon-${badge.toLowerCase()}`} />
      </svg>
      <p>{badge}</p>
    </div>
  );
};

export default BadgesContainer;
