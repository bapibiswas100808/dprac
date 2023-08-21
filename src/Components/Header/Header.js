// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <section className="header-area">
      <Navbar expand="lg">
        <Container>
          <NavLink className="pe-3">
            <h1>Dark Mode</h1>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
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
              <NavLink className="nav-link" to="/dash">
                DashBoard
              </NavLink>
            </Nav>
            {/* <Form className="d-flex">
              <Button onClick={() => ToogleTheme()}>Toggle</Button>
            </Form> */}
            <section className="switch">
              <label className="switch-label">
                {theme === "light" ? "Light Mode" : "Dark Mode"}
              </label>
              <ReactSwitch
                className="ps-3"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
            </section>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
