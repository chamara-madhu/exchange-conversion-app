import { fetchAllCocktail, searchCocktail } from "../../api/cocktailApi";
import { COCKTAIL_LIST } from "./types";

// fetch random 5 cocktails
export const getAllCocktails = () => {
  return async (dispatch) => {
    const result = await fetchAllCocktail;
    const { drinks } = result?.data;
    const randomDrinks = [];

    for (let i = 1; i <= 5; i++) {
      const randomNumber = Math.ceil(Math.random() * drinks.length);
      randomDrinks.push(drinks[randomNumber]);
    }

    dispatch({
      type: COCKTAIL_LIST,
      payload: randomDrinks,
    });
  };
};

// search cocktails
export const searchCocktails = (keyword) => {
  return async (dispatch) => {
    const result = await searchCocktail(keyword);
    const { drinks } = result?.data;

    dispatch({
      type: COCKTAIL_LIST,
      payload: drinks || [],
    });
  };
};
