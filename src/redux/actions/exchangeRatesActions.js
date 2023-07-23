import { CONVERTED_RATES } from "./types";
import { convertExchangeRates as apiConvertExchangeRates } from "../../api/exchangeApi";

export const fetchAndConvertExchangeRates = (
  fromCurrency,
  toCurrency,
  amount
) => {
  return async (dispatch) => {
    try {
      const result = await apiConvertExchangeRates(
        fromCurrency,
        toCurrency,
        amount
      );

      console.log("result?.data");
      console.log(result?.data);

      dispatch({
        type: CONVERTED_RATES,
        payload: result?.data || {},
      });
    } catch (error) {
      // Handle the error here (optional).
      console.error("Error fetching or converting exchange rates:", error);
    }
  };
};
