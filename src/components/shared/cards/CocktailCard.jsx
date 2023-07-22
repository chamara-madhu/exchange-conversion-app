import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../redux/actions/favoriteActions";
import CommonButton from "../buttons/CommonButton";

const CocktailCard = ({
  item,
  addToFavoriteAction,
  removeFromFavoriteAction,
  favoriteList,
}) => {
  const isFavorite =
    favoriteList.data.filter((el) => el.idDrink === item.idDrink).length > 0;

  return (
    <Card className="cocktail-card-wrapper">
      {isFavorite ? (
        <AiFillHeart className="favorite-indicator" />
      ) : (
        <AiOutlineHeart className="favorite-indicator" />
      )}
      <Card.Img variant="top" src={item?.strDrinkThumb} />
      <Card.Body>
        <Card.Title className="title">{item?.strDrink}</Card.Title>
      </Card.Body>
      {isFavorite ? (
        <CommonButton
          label="Remove from favorite"
          handleBtn={() => removeFromFavoriteAction(item?.idDrink)}
          cusClass="action-btn"
          variant="dark"
        />
      ) : (
        <CommonButton
          label="Add to favorite"
          handleBtn={() => addToFavoriteAction(item)}
          cusClass="action-btn"
          variant="dark"
        />
      )}
    </Card>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToFavoriteAction: addToFavorite,
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

export default connect(mapStateToProps, matchDispatchToProps)(CocktailCard);
