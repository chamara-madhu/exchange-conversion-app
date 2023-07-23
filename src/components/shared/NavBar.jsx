import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Currency Conversion App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
