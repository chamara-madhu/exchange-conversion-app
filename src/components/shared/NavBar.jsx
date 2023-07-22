import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import FavoriteCard from "./cards/FavoriteCard";
import OffcanvasComp from "./offcanvas/OffcanvasComp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllFavorites } from "../../redux/actions/favoriteActions";

const NavBar = ({ favoriteList, getAllFavoritesAction }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllFavoritesAction();
  }, [getAllFavoritesAction]);

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Cocktail App</Navbar.Brand>
          <span className="all-favorites-wrapper" onClick={() => setShow(true)}>
            <span className="count">{favoriteList.data.length}</span>
            <AiOutlineHeart />
          </span>
        </Container>
      </Navbar>

      <OffcanvasComp
        show={show}
        handleClose={() => setShow(false)}
        title="All favorites"
        cusClassName="favorite-side-drawer"
      >
        {favoriteList.data.map((item) => (
          <FavoriteCard item={item} key={item?.idDrink} />
        ))}
      </OffcanvasComp>
    </>
  );
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllFavoritesAction: getAllFavorites,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteList: state?.favoriteList || {},
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
