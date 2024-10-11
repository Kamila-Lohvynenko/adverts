import { Link } from "react-router-dom";
import css from "./RedirectLink.module.css";

const RedirectLink = ({ text, redirectTo }) => {
  return (
    <Link className={css.link} to={redirectTo}>
      {text}
    </Link>
  );
};

export default RedirectLink;
