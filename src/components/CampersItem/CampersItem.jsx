import css from "./CampersItem.module.css";
import CampersRatingAndLocation from "../CampersRatingAndLocation/CampersRatingAndLocation";
import BadgesList from "../BadgesList/BadgesList";
import RedirectLink from "../RedirectLink/RedirectLink";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { setFavorite } from "../../redux/favorites/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

const CampersItem = ({ camper }) => {
  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    dispatch(setFavorite(camper));
  };

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(
    (item) => item.id === camper.id && item.name === camper.name
  );

  return (
    <>
      <img className={css.image} src={camper.gallery[0].original} />
      <div className={css.info}>
        <div className={css.firstLineWrapper}>
          <p className={css.name}>{camper.name}</p>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{camper.price}.00</p>
            <FavoriteButton
              onClick={handleSetFavorite}
              isFavorite={isFavorite}
            />
          </div>
        </div>
        <CampersRatingAndLocation camper={camper} />
        <p className={css.description}>{camper.description}</p>
        <BadgesList camper={camper} />
        <RedirectLink text="Show more" redirectTo={`/catalog/${camper.id}`} />
      </div>
    </>
  );
};

export default CampersItem;
