import { useSelector } from "react-redux";
import css from "./DetailsList.module.css";
import { selectChosenCamper } from "../../redux/campers/selectors";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const DetailsList = () => {
  const camper = useSelector(selectChosenCamper);

  const { form, length, width, height, tank, consumption } = camper;

  return (
    <dl className={css.list}>
      <dt>Form</dt>
      <dd className={css.description}>{capitalizeFirstLetter(form)}</dd>

      <dt>Length</dt>
      <dd className={css.description}>{length}</dd>

      <dt>Width</dt>
      <dd className={css.description}>{width}</dd>

      <dt>Height</dt>
      <dd className={css.description}>{height}</dd>

      <dt>Tank</dt>
      <dd className={css.description}>{tank}</dd>

      <dt>Consumption</dt>
      <dd className={css.description}>{consumption}</dd>
    </dl>
  );
};

export default DetailsList;
