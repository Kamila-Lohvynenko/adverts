import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  });
  return (
    <div className={css.page}>
      <SearchForm />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
