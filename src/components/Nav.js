import React from 'react';
import {Link} from 'react-router-dom';
// import headshot
import headShot from "../images/headshotPortfolio.png";

function Nav() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="Nav navbar navbar-default navbar-fixed-top ">
      {/* add header image */}
      <img src={headShot} className="rounded-circle pl-100" alt="headshot" style={{ height: '55px' }} />
      <ul className="">
        {/* About leads to the / endpoint */}
        <li><Link to = "/">About Me</Link> </li>
        <li><Link to = "/Portfolio">Portfolio</Link> </li>
        <li><Link to = "/Resume">Resume</Link> </li>
        <li><Link to = "/Contact">Contact</Link> </li>

      </ul>      
    </div>
  );
}

export default Nav;