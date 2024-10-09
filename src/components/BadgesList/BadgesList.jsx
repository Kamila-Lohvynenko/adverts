import BadgesContainer from "../BadgesContainer/BadgesContainer";
import css from "./BadgesList.module.css";

const BadgesList = ({ camper }) => {
  return (
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
  );
};

export default BadgesList;
