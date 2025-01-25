import sprite from "../../images/sprite.svg";

import { useState } from "react";
import FiltersButton from "./FiltersButton";
import SearchForm from "../SearchForm/SearchForm";

import css from "./FiltersMenu.module.css";

const FiltersMenu = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <FiltersButton openMenu={openMenu} />
      {isMenuOpen && (
        <div className={css.menu}>
          <button className={css.closeButton} onClick={closeMenu}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </button>
          <SearchForm onSearch={onSearch} closeMenu={closeMenu} />
        </div>
      )}
    </>
  );
};

export default FiltersMenu;
