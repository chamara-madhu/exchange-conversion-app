import { CONVERTED_RATES } from "../actions/types";
import { convertedRates } from "./initialState";

const exchangeRatesReducer = (state = convertedRates, action) => {
  switch (action.type) {
    case CONVERTED_RATES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default exchangeRatesReducer;
