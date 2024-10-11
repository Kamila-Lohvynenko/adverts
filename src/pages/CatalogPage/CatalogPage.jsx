import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
// import Loader from "./../../components/Loader/Loader";
import {
  selectNotFound,
  selectShownMoreBtn,
} from "../../redux/campers/selectors";
import { useSearchParams } from "react-router-dom";
import { resetItems } from "../../redux/campers/slice";
import { searchParamsNames } from "../../constants";
import NotFoundComponent from "../../components/NotFoundComponent/NotFoundComponent";
// import { removeNulls } from "../../helpers/removeNullFromObj";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const shownMoreBtn = useSelector(selectShownMoreBtn);
  const isNotFound = useSelector(selectNotFound);

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
      await setLoading(true);
      await dispatch(fetchCampers({ page, ...memoizedParamObject }));
      await setLoading(false);
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

  // return loading ? (
  //   <Loader />
  // ) : (
  //   <div className={css.page}>
  //     <SearchForm />
  //     <div>
  //       <CampersList handleLoadMore={handleLoadMore} />
  //       <LoadMoreButton onClick={handleLoadMore} />
  //     </div>
  //   </div>
  // );
  return (
    <div className={css.page}>
      <SearchForm onSearch={onSearch} />
      {isNotFound && !loading ? (
        <NotFoundComponent />
      ) : (
        <div>
          <CampersList handleLoadMore={handleLoadMore} />
          {!loading && shownMoreBtn && (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
