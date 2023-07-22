import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CocktailCard from "../../shared/cards/CocktailCard";
import TextField from "../../shared/inputs/TextField";
import {
  getAllCocktails,
  searchCocktails,
} from "../../../redux/actions/cocktailActions";
import CommonButton from "../../shared/buttons/CommonButton";

const Home = ({
  cocktailList,
  getAllCocktailsAction,
  searchCocktailsAction,
}) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getAllCocktailsAction();
  }, [getAllCocktailsAction]);

  const handleSearch = useCallback(() => {
    if (keyword) {
      searchCocktailsAction(keyword);
    }
  }, [keyword, searchCocktailsAction]);

  const handleRefresh = useCallback(() => {
    getAllCocktailsAction();
  }, [getAllCocktailsAction]);

  return (
    <>
      <div className="header-container">
        <div className="search-field-wrapper">
          <TextField
            value={keyword}
            handleChange={(e) => setKeyword(e.target.value)}
          />
          <span className="search-btn" onClick={handleSearch}>
            <FiSearch />
          </span>
        </div>
      </div>
      <Container className="py-5">
        <div className="sub-header-bar">
          <p className="showing-results">
            Showing {cocktailList?.length} results
          </p>
          <CommonButton
            label="Refresh"
            handleBtn={handleRefresh}
            size="sm"
            variant="outline-dark"
          />
        </div>
        <div className="card-container">
          {cocktailList.map(
            (item, i) => item?.idDrink && <CocktailCard item={item} key={i} />
          )}
        </div>
      </Container>
    </>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllCocktailsAction: getAllCocktails,
      searchCocktailsAction: searchCocktails,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cocktailList: state?.cocktailList?.data || [],
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
