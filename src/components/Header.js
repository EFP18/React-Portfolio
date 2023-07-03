import React from 'react';
import Nav from './Nav';

function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>This is the Header page!</h1>
      <Nav></Nav>
    </div>
  );
}

export default Header