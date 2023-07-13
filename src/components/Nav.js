import React from "react";
import { NavLink } from "react-router-dom";
// import headshot
import headShot from "../images/headshotPortfolio.png";

function Nav() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>
 */}
        <div className="Nav navbar navbar-default navbar-fixed-top ">
          <nav class="Nav navbar navbar-expand-lg navbar-light bg-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* add header image */}
            <img
              src={headShot}
              className="rounded-circle pl-100"
              alt="headshot"
              style={{ height: "55px" }}
            />
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                {/* About leads to the / endpoint */}
                <li className="nav-item nav-link">
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
                <li className="nav-item nav-link">
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
                <li className="nav-item nav-link">
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
                <li className="nav-item nav-link">
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
            </div>
          </nav>
        </div>
      </div>

  );
}

export default Nav;
