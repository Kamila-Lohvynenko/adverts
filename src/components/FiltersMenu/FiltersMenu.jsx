import { useState, useEffect, useRef } from "react";
import FiltersButton from "./FiltersButton";
import SearchForm from "../SearchForm/SearchForm";
import css from "./FiltersMenu.module.css";
import sprite from "../../images/sprite.svg";

const FiltersMenu = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <FiltersButton openMenu={openMenu} />
      {isMenuOpen && (
        <div className={css.menu}>
          <div className={css.menuContent} ref={menuRef}>
            <button className={css.closeButton} onClick={closeMenu}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
            <SearchForm onSearch={onSearch} closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersMenu;
