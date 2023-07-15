import React from "react";
import { NavLink } from "react-router-dom";
// import headshot
import headShot from "../images/headshotPortfolio.png";
import { Navbar, Container } from "react-bootstrap";

function Navigation() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <img
            src={headShot}
            className="rounded-circle pl-100"
            alt="headshot"
            style={{ height: "55px" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <div className="Nav navbar navbar-default navbar-fixed-top "> */}

            <ul className="">
              {/* About leads to the / endpoint */}
              <li>
                <NavLink
                  to="/"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "rgb(109, 109, 167)",
                    };
                  }}
                >
                  About Me
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/Portfolio"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "rgb(109, 109, 167)",
                    };
                  }}
                >
                  Portfolio
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/Resume"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "rgb(109, 109, 167)",
                    };
                  }}
                >
                  Resume
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "rgb(109, 109, 167)",
                    };
                  }}
                >
                  Contact
                </NavLink>{" "}
              </li>
            </ul>
            {/* </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
