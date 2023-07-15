import React from 'react';
import Navigation from './Navigation';

function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="Header">
      <h1 className="nameHeader">Ester Pelosof</h1>
      <Navigation></Navigation>
    </div>
  );
}

export default Header;