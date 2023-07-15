import React from "react";
import {Link } from 'react-router-dom';

function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
      <ul className="Footer"> 
        <li> <Link to="https://github.com/EFP18">GitHub</Link>  </li>
        <li> <Link to="https://www.linkedin.com/in/ester-pelosof-242603228/">LinkedIn</Link>  </li>
      </ul>
  );
}
export default Footer;
