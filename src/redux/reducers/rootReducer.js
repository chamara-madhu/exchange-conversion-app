import { combineReducers } from "redux";
import exchangeRatesReducer from "./exchangeRatesReducer";

const rootReducer = combineReducers({
  convertedRates: exchangeRatesReducer,
});

export default rootReducer;
