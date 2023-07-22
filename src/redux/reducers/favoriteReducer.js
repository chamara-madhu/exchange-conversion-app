import { FAVORITE_LIST } from "../actions/types";
import { favoriteList } from "./initialState";

const authReducer = (state = favoriteList, action) => {
  switch (action.type) {
    case FAVORITE_LIST:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
