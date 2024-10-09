import css from "./CampersItem.module.css";
import sprite from "../../images/sprite.svg";
import BadgesContainer from "../BadgesContainer/BadgesContainer";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const CampersItem = ({ camper }) => {
  console.log(camper);
  const navigate = useNavigate();

  return (
    <>
      <img className={css.image} src={camper.gallery[0].original} />
      <div className={css.info}>
        <div className={css.firstLineWrapper}>
          <p className={css.name}>{camper.name}</p>
          <p className={css.price}>€{camper.price}.00</p>
        </div>
        <div className={css.secondLineWrapper}>
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
        <p className={css.description}>{camper.description}</p>
        <div className={css.badgesWrapper}>
          {camper.transmission === "automatic" && (
            <BadgesContainer badge="Automatic" />
          )}
          {camper.engine === "petrol" && <BadgesContainer badge="Petrol" />}
          {camper.kitchen && <BadgesContainer badge="Kitchen" />}
          {camper.AC && <BadgesContainer badge="AC" />}
          {camper.TV && <BadgesContainer badge="TV" />}
          {camper.bathroom && <BadgesContainer badge="Bathroom" />}
        </div>
        <Button
          text="Show more"
          onClick={() => navigate(`/campers/${camper.id}`)}
        />
      </div>
    </>
  );
};

export default CampersItem;
