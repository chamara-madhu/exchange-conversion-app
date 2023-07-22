import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromFavorite } from "../../../redux/actions/favoriteActions";

const FavoriteCard = ({ item, removeFromFavoriteAction }) => {
  return (
    <div className="favorite-card-item-wrapper">
      <div>
        <img src={item.strDrinkThumb} alt="" className="card-image" />
        <span className="title">{item.strDrink}</span>
      </div>
      <FiTrash2
        className="delete-btn"
        onClick={() => removeFromFavoriteAction(item.idDrink)}
      />
    </div>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeFromFavoriteAction: removeFromFavorite,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteList: state?.favoriteList || {},
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(FavoriteCard);
