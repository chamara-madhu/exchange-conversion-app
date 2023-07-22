import { combineReducers } from "redux";
import cocktailReducer from "./cocktailReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  cocktailList: cocktailReducer,
  favoriteList: favoriteReducer,
});

export default rootReducer;
