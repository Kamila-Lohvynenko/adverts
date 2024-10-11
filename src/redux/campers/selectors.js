import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (store) => store.campers.items;
export const selectChosenCamper = (store) => store.campers.chosenItem;
export const selectTotal = (store) => store.campers.total;
export const selectShownMoreBtn = createSelector(
  [selectCampers, selectTotal],
  (campers, total) => {
    console.log(total);
    console.log(campers);

    return campers.length > 0 && campers.length < total;
  }
);
export const selectNotFound = createSelector([selectCampers], (campers) => {
  return campers.length === 0;
});
