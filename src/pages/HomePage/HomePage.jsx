import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Button text="View Now" onClick={() => navigate("/catalog")} />
    </div>
  );
};

export default HomePage;
