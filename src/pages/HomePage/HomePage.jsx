import css from "./HomePage.module.css";
import RedirectLink from "../../components/RedirectLink/RedirectLink";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetItems } from "../../redux/campers/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <RedirectLink text="View Now" redirectTo="/catalog" />
    </div>
  );
};

export default HomePage;
