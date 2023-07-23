import baseApi from "./baseApi";

export const convertExchangeRates = (from, to, amount) => {
  return baseApi(`/api/v1/exchange?from=${from}&to=${to}&amount=${amount}`);
};
