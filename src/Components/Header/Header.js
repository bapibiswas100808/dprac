import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const ToogleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <section className="header-area">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <h1>Dark Mode</h1>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/registration">
                Registration
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Button onClick={() => ToogleTheme()}>Toggle</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
