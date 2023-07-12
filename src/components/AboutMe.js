import React from 'react';
import "../styles/AboutMe.css"
import 'bootstrap/dist/css/bootstrap.css';
// import { useEffect } from "react";
import Page from './Page'


function AboutMe() {

  // Use useEffect to set the title of the page on the tab
  // useEffect(() => {
  //   document.title = "Portofolio - Ester Pelosof";
  // });

  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={'About Me!'}>
      <div className="container textAboutMe col-lg-12 col-md-12 col-s-12">
        <p>Very methodical and hard working, I enjoy solving puzzles and answering complex questions. 
          I am very passionate about languages and I'm very interested in learning some programming languages as well, 
          to combine them with creativity. I am very eager to learn, I am very organized, and I work very well with deadlines. 
        </p>
        <p>I would love the chance to work with you 
          and create something beautiful out of your vision and my creativity.
        </p>
      </div>
    </Page>
  );
}

export default AboutMe;