import baseApi from "./baseApi";

export const fetchAllCocktail = baseApi("/api/json/v1/1/filter.php?c=Cocktail");

export const searchCocktail = (keyword) => {
  return baseApi(`/api/json/v1/1/search.php?s=${keyword}`);
};
