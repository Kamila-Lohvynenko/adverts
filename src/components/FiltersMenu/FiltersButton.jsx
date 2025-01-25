import css from "./FiltersButton.module.css";

const FiltersButton = ({ openMenu }) => {
  return (
    <button className={css.filtersButton} onClick={openMenu}>
      Filters
    </button>
  );
};

export default FiltersButton;
