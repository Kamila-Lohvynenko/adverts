import { useSelector } from "react-redux";
import css from "./CampersList.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.list}>
      {campers.map((camper) => {
        return (
          <li key={camper.id} className={css.item}>
            {<CampersItem camper={camper} />}
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
