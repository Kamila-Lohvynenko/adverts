import css from "./CampersItem.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CampersRatingAndLocation from "../CampersRatingAndLocation/CampersRatingAndLocation";
import BadgesList from "../BadgesList/BadgesList";

const CampersItem = ({ camper }) => {
  const navigate = useNavigate();

  return (
    <>
      <img className={css.image} src={camper.gallery[0].original} />
      <div className={css.info}>
        <div className={css.firstLineWrapper}>
          <p className={css.name}>{camper.name}</p>
          <p className={css.price}>€{camper.price}.00</p>
        </div>
        <CampersRatingAndLocation camper={camper} />
        <p className={css.description}>{camper.description}</p>
        <BadgesList camper={camper} />
        <Button
          text="Show more"
          onClick={() => navigate(`/catalog/${camper.id}`)}
        />
      </div>
    </>
  );
};

export default CampersItem;
