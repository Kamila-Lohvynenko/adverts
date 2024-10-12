import css from "./FeaturesSection.module.css";
import BadgesList from "./../BadgesList/BadgesList";
import { useSelector } from "react-redux";
import { selectChosenCamper } from "./../../redux/campers/selectors";
import DetailsList from "../DetailsList/DetailsList";

const FeaturesSection = () => {
  const camper = useSelector(selectChosenCamper);

  return (
    <section className={css.section}>
      <BadgesList camper={camper} />
      <div>
        <h4 className={css.title}>Vehicle details</h4>
        <DetailsList />
      </div>
    </section>
  );
};

export default FeaturesSection;
