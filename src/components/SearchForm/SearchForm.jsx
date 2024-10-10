import sprite from "../../images/sprite.svg";
import { Formik, Form, Field } from "formik";
import css from "./SearchForm.module.css";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

const SearchForm = () => {
  const equipmentOptions = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const vehicleTypeOptions = ["Van", "Fully Integrated", "Alcove"];
  const campers = useSelector(selectCampers);
  console.log(campers);

  // Initial form values
  const initialValues = {
    equipment: [],
    vehicleType: "",
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="vehicle-filter-form">
        {/* Location */}
        <div className={css.locationWrapper}>
          <Field
            className={css.locationInput}
            name="location"
            id="location"
            list="location-name"
          />
          <datalist id="location-name">
            {campers.map((camper) => {
              return (
                <option key={camper.id} value={camper.location}>
                  {camper.location}
                </option>
              );
            })}
          </datalist>
          <svg height={20} width={20} className={css.locationIcon}>
            <use href={`${sprite}#icon-map`} />
          </svg>
        </div>

        {/* Filters Section */}
        <h4>Filters</h4>

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
        <Button text="Search" />
      </Form>
    </Formik>
  );
};

export default SearchForm;
