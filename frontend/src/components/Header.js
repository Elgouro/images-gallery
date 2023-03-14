import React from "react";
import { Navbar, Container } from "react-bootstrap";
/* how to set properties in hower component in order to passe it somme information in app.js */

const NavbarStyle = {
  backgroundColor: "lightblue",
};

const Header = (props) => {
  return (
    <Navbar style={NavbarStyle} variant="light">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
