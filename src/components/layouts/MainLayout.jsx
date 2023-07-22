import React from "react";
import NavBar from "../shared/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainLayout;
