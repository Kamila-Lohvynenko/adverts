import css from "./GalleryList.module.css";
import { v4 as uuidv4 } from "uuid";

const GalleryList = ({ gallery }) => {
  return (
    <ul className={css.list}>
      {gallery.map((image) => {
        return (
          <li className={css.item} key={uuidv4()}>
            <img
              className={css.image}
              src={image.original}
              alt="Picture of the camper"
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default GalleryList;
