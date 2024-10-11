import { TbFaceIdError } from "react-icons/tb";
import css from "./NotFoundComponent.module.css";

const NotFoundComponent = () => {
  return (
    <div className={css.wrapper}>
      <TbFaceIdError size={80} />
      <p>Nothing was found...</p>
    </div>
  );
};

export default NotFoundComponent;
