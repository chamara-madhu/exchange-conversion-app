import React, { useState, useCallback } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "../../shared/inputs/TextField";
import CommonButton from "../../shared/buttons/CommonButton";
import Select from "../../shared/inputs/Select";
import { fetchAndConvertExchangeRates } from "../../../redux/actions/exchangeRatesActions";
import { Table } from "react-bootstrap";

const Home = ({ convertedRates, convertExchangeRatesAction }) => {
  const [form, setForm] = useState({
    amount: null,
    from: "USD",
    to: "EUR",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleConvert = useCallback(() => {
    const { from, to, amount } = form;

    if (amount) {
      convertExchangeRatesAction(from, to, amount);
    }
  }, [form, convertExchangeRatesAction]);

  return (
    <div className="currency-main-container">
      <div className="currency-form-container">
        <TextField
          type="number"
          label="Amount"
          min={1}
          name="amount"
          value={form.amount}
          handleChange={handleChange}
        />
        <Select
          label="From"
          name="from"
          value={form.from}
          handleChange={handleChange}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </Select>
        <FaExchangeAlt className="conversion-icon" />
        <Select
          label="To"
          name="to"
          value={form.to}
          handleChange={handleChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
        <CommonButton
          label="Convert"
          handleBtn={handleConvert}
          cusClass="convert-btn"
          isDisabled={form.from === form.to || !form.amount}
        />
      </div>
      {convertedRates?.to && (
        <div className="result-container">
          <Table bordered responsive style={{ width: 500 }}>
            <tbody>
              <tr>
                <th>Currency Rates</th>
                <th>Exchange rate</th>
                <th>Converted amount</th>
              </tr>
              <tr>
                <td>Public currency rates</td>
                <td>
                  {convertedRates?.to}{" "}
                  {(
                    convertedRates?.publicCurrencyRates?.exchangeRate || 0
                  ).toFixed(2)}
                </td>
                <td>
                  {convertedRates?.to}{" "}
                  {(
                    convertedRates?.publicCurrencyRates?.exchangedAmount || 0
                  ).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>Corporate currency rates</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      convertExchangeRatesAction: fetchAndConvertExchangeRates,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    convertedRates: state?.convertedRates?.data || {},
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
