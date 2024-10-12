import sprite from "../../images/sprite.svg";
import { Formik, Form, Field } from "formik";
import css from "./SearchForm.module.css";
import Button from "../Button/Button";
import { useSearchParams } from "react-router-dom";
import { equipmentName, vehicleTypeName } from "../../constants";
import { toCamelCase } from "../../utils/toCamelCase";
import { useSelector } from "react-redux";
// import { selectCampers } from "../../redux/campers/selectors";
import { searchParamsNames } from "./../../constants/index";
import { selectButtonDisabled } from "../../redux/campers/selectors";

const SearchForm = ({ onSearch }) => {
  const equipmentOptions = [
    equipmentName.AC,
    equipmentName.Automatic,
    equipmentName.Kitchen,
    equipmentName.TV,
    equipmentName.Bathroom,
  ];
  const vehicleTypeOptions = [
    vehicleTypeName.Van,
    vehicleTypeName.FullyIntegrated,
    vehicleTypeName.Alcove,
    vehicleTypeName.PanelTrack,
  ];
  // const campers = useSelector(selectCampers);
  const isDisabled = useSelector(selectButtonDisabled);
  console.log(isDisabled);

  // Initial form values
  const initialValues = {
    equipment: [],
    vehicleType: "",
    locationName: "",
  };

  // Handle form submission
  const [params, setParams] = useSearchParams();
  const handleSubmit = (values) => {
    const { equipment, vehicleType, locationName } = values;
    console.log({ equipment, vehicleType, locationName });

    searchParamsNames.forEach((item) => params.delete(item));

    equipment.forEach((item) => {
      switch (item) {
        case equipmentName.AC:
          params.set(equipmentName.AC, true);
          break;
        case equipmentName.TV:
          params.set(equipmentName.TV, true);
          break;
        case equipmentName.Bathroom:
          params.set(equipmentName.Bathroom.toLowerCase(), true);
          break;
        case equipmentName.Kitchen:
          params.set(equipmentName.Kitchen.toLowerCase(), true);
          break;
        case equipmentName.Automatic:
          params.set("transmission", equipmentName.Automatic.toLowerCase());
          break;
        default:
          break;
      }
    });

    if (vehicleType.trim() !== "") {
      params.set("form", toCamelCase(vehicleType));
    }

    if (locationName.trim() !== "") {
      params.set("location", locationName);
    }

    onSearch();

    setParams(params);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        {/* Location */}
        <h5 className={css.locationTitle}>Location</h5>
        <div className={css.locationWrapper}>
          <Field
            className={css.locationInput}
            name="locationName"
            id="locationName"
            placeholder="City"
          />
          <svg height={20} width={20} className={css.locationIcon}>
            <use href={`${sprite}#icon-map`} />
          </svg>
        </div>

        {/* Filters Section */}
        <h4 className={css.filtersTitle}>Filters</h4>

        {/* Vehicle Equipment (Checkboxes) */}
        <div className={css.equipments}>
          <h5 className={css.filterName}>Vehicle equipment</h5>
          <div className={css.equipmentOptions}>
            {equipmentOptions.map((option) => (
              <div key={option}>
                <Field
                  className={css.input}
                  type="checkbox"
                  name="equipment"
                  value={option}
                  id={option}
                />
                <label className={css.label} htmlFor={option}>
                  <svg height={20} width={20}>
                    <use
                      href={`${sprite}#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    />
                  </svg>
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Type (Radio buttons) */}
        <div className={css.types}>
          <h5 className={css.filterName}>Vehicle type</h5>
          <div className={css.typeOptions}>
            {vehicleTypeOptions.map((option) => (
              <div key={option}>
                <Field
                  type="radio"
                  name="vehicleType"
                  value={option}
                  className={css.input}
                  id={option}
                />
                <label className={css.label} htmlFor={option}>
                  <svg height={20} width={20}>
                    <use
                      href={`${sprite}#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    />
                  </svg>
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <Button text="Search" isDisabled={isDisabled} />
      </Form>
    </Formik>
  );
};
export default SearchForm;
