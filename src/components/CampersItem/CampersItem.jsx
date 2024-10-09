import css from "./CampersItem.module.css";

const CampersItem = ({ camper }) => {
  console.log(camper);

  return (
    <>
      <img className={css.image} src={camper.gallery[0].original} />
      <div className={css.info}>
        <div className={css.wrapper}>
          <p className={css.name}>{camper.name}</p>
          <p className={css.price}> {camper.price}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
      </div>
    </>
  );
};

export default CampersItem;
