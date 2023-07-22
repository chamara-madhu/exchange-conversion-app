import { FAVORITE_LIST } from "./types";

// fetch all favorites
export const getAllFavorites = () => {
  const data = localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList") || "[]")
    : [];

  return {
    type: FAVORITE_LIST,
    payload: data,
  };
};

// add item to favorite
export const addToFavorite = (item) => {
  return async (dispatch, getState) => {
    const {
      favoriteList: { data: newList },
    } = getState();

    newList.push({
      ...item,
    });

    localStorage.setItem("favoriteList", JSON.stringify(newList));

    dispatch({
      type: FAVORITE_LIST,
      payload: newList,
    });
  };
};

// remove item from favorite
export const removeFromFavorite = (id) => {
  return async (dispatch, getState) => {
    const {
      favoriteList: { data },
    } = getState();

    const newList = data.filter((item) => item.idDrink !== id);

    localStorage.setItem("favoriteList", JSON.stringify(newList));

    dispatch({
      type: FAVORITE_LIST,
      payload: newList,
    });
  };
};
