import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectChosenCamper } from "../../redux/campers/selectors";
import css from "./CamperDetailsPage.module.css";
import CampersRatingAndLocation from "../../components/CampersRatingAndLocation/CampersRatingAndLocation";
import GalleryList from "../../components/GalleryList/GalleryList";
import { resetItems } from "../../redux/campers/slice";
import SectionWithForm from "../../components/SectionWithForm/SectionWithForm";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import SectionsToggler from "../../components/SectionsToggler/SectionsToggler";

const CamperDetailsPage = () => {
  const [isFeaturesShown, setIsFeaturesShown] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());

    async function name() {
      await dispatch(fetchCamperById(id)).unwrap();
    }
    name();
  }, [id, dispatch]);

  const selectedCamper = useSelector(selectChosenCamper);

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
      <SectionsToggler
        isFeaturesShown={isFeaturesShown}
        setIsFeaturesShown={setIsFeaturesShown}
      />
      <div className={css.sectionsWrapper}>
        {isFeaturesShown ? <FeaturesSection /> : <ReviewsSection />}
        <SectionWithForm />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
