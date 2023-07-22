import { COCKTAIL_LIST } from "../actions/types";
import { cocktailList } from "./initialState";

const authReducer = (state = cocktailList, action) => {
  switch (action.type) {
    case COCKTAIL_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
