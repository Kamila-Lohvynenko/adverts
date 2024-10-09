import sprite from "../../images/sprite.svg";
import css from "./CampersRatingAndLocation.module.css";

const CampersRatingAndLocation = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      <svg className={css.star}>
        <use href={`${sprite}#icon-star`} />
      </svg>
      <p
        className={css.rating}
      >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
      <svg className={css.map}>
        <use href={`${sprite}#icon-map`} />
      </svg>
      <p>{camper.location}</p>
    </div>
  );
};

export default CampersRatingAndLocation;
