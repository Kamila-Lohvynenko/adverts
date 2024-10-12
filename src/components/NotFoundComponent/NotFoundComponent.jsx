import css from "./NotFoundComponent.module.css";

import image from "../../images/errors/error.png";
import clsx from "clsx";

const NotFoundComponent = ({ classCss }) => {
  const className = clsx(css.wrapper, classCss && css[classCss]);

  return (
    <div className={className}>
      <img className={css.image} alt="error image" src={image} />
      <p className={css.text}>Nothing was found...</p>
    </div>
  );
};

export default NotFoundComponent;
