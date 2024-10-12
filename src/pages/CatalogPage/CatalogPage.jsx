import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Loader from "./../../components/Loader/Loader";
import {
  selectError,
  selectLoading,
  selectNotFound,
  selectShownMoreBtn,
} from "../../redux/campers/selectors";
import { useSearchParams } from "react-router-dom";
import { resetItems } from "../../redux/campers/slice";
import { searchParamsNames } from "../../constants";
import NotFoundComponent from "../../components/NotFoundComponent/NotFoundComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const CatalogPage = () => {
  const [page, setPage] = useState(1);

  const loading = useSelector(selectLoading);
  const shownMoreBtn = useSelector(selectShownMoreBtn);
  const isNotFound = useSelector(selectNotFound);
  const isError = useSelector(selectError);

  const [params] = useSearchParams();
  const memoizedParamObject = useMemo(() => {
    const paramObject = {};

    searchParamsNames.forEach((item) => {
      paramObject[item] = params.get(item);
    });
    return paramObject;
  }, [params]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function name() {
      await dispatch(fetchCampers({ page, ...memoizedParamObject }));
    }
    name();
  }, [dispatch, page, memoizedParamObject]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onSearch = () => {
    dispatch(resetItems());
    setPage(1);
  };

  return (
    <div className={css.page}>
      <SearchForm onSearch={onSearch} />
      <div className={css.listWrapper}>
        {!isError && !isNotFound && (
          <CampersList handleLoadMore={handleLoadMore} />
        )}
        {!loading && shownMoreBtn && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
        {loading && <Loader />}
        {isNotFound && !loading && <NotFoundComponent />}
        {isError && !loading && <ErrorComponent />}
      </div>
    </div>
  );
};

export default CatalogPage;
