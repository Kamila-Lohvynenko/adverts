import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectChosenCamper } from "../../redux/campers/selectors";
import css from "./CamperDetailsPage.module.css";
import CampersRatingAndLocation from "../../components/CampersRatingAndLocation/CampersRatingAndLocation";
import GalleryList from "../../components/GalleryList/GalleryList";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function name() {
      await dispatch(fetchCamperById(id)).unwrap();
    }
    name();
  }, [id, dispatch]);

  const selectedCamper = useSelector(selectChosenCamper);
  console.log(selectedCamper);
  if (!selectedCamper) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.page}>
      <p className={css.title}>{selectedCamper.name}</p>
      <CampersRatingAndLocation camper={selectedCamper} />
      <p className={css.price}>€{selectedCamper.price}.00</p>
      <GalleryList gallery={selectedCamper.gallery} />
      <p className={css.description}>{selectedCamper.description}</p>
    </div>
  );
};

export default CamperDetailsPage;
