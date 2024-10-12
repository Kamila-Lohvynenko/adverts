import { GiAutoRepair } from "react-icons/gi";
import css from "./ErrorComponent.module.css";
import clsx from "clsx/lite";

const ErrorComponent = ({ classCss }) => {
  const className = clsx(css.wrapper, classCss && css[classCss]);

  return (
    <div className={className}>
      <GiAutoRepair size={80} />
      <p className={css.text}>Something went wrong... Please try again</p>
    </div>
  );
};

export default ErrorComponent;
