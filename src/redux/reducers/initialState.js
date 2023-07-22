export const cocktailList = { data: [] };

export const favoriteList = {
  data: localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList") || "[]")
    : [],
};
