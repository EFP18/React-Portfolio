import React from 'react';
import resume from '../images/resume.pdf'
import { useEffect } from "react";

function Resume() {

  
  useEffect(() => {
    document.title = "hey";
  });



  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1><a href={resume} download >Download resume here!</a></h1>
      <h2>skills</h2>
    </div>
  );
}

export default Resume