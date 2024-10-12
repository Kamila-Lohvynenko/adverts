import css from "./ReviewsSection.module.css";

import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { selectChosenCamper } from "../../redux/campers/selectors";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewsSection = () => {
  const camper = useSelector(selectChosenCamper);

  return (
    <section>
      <ul className={css.list}>
        {camper.reviews.map((item) => {
          return (
            <li className={css.item} key={uuidv4()}>
              <ReviewCard review={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReviewsSection;
