import React from 'react';
import resume from '../images/resume.pdf'
import { useEffect } from "react";

function Resume() {
  
  useEffect(() => {
    document.title = "Resume";
  });

  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1><a href={resume} download >Click here to download my resume!</a></h1>
      <h2>Languages: HTML, CSS, JAVASCRIPT</h2>
      <h2>Applications: Bootstrap, jQuery, Node.js, GitHub, Express.js, React.js, SQL</h2>
    </div>
  );
}

export default Resume