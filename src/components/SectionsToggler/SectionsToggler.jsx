import clsx from "clsx/lite";
import css from "./SectionsToggler.module.css";

const SectionsToggler = ({ setIsFeaturesShown, isFeaturesShown }) => {
  const featuresClassName = clsx(css.button, isFeaturesShown && css.active);
  const reviewsClassName = clsx(css.button, !isFeaturesShown && css.active);

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={featuresClassName}
        onClick={() => setIsFeaturesShown(true)}
      >
        Features
      </button>
      <button
        type="button"
        className={reviewsClassName}
        onClick={() => setIsFeaturesShown(false)}
      >
        Reviews
      </button>
    </div>
  );
};

export default SectionsToggler;
