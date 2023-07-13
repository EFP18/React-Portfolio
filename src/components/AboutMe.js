import React from 'react';
import "../styles/AboutMe.css"
import 'bootstrap/dist/css/bootstrap.css';
import Page from './Page';
import pictureSp from "../images/splash2.jpg";



function AboutMe() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={'Ester Pelosof - Home'}>
      {/* <div className="container textAboutMe "> */}
      <div className="card mb-3">
        <img className="card-img-top imageAboutMe" src={pictureSp} alt="aboutMeImage"/>
        <div className="card-body">
          <h5 className="card-title">Hey! My name is Ester!</h5>
          <p className="card-text">
            Very methodical and hard working, I enjoy solving puzzles and answering complex questions. 
            I am very passionate about languages and I'm very interested in learning some programming languages as well, 
            to combine them with creativity. I am very eager to learn, I am very organized, and I work very well with deadlines. 
          </p>
          <p className="card-text"><small className="text-muted">Contact me for more information!!</small></p>
        </div>
      </div>
    </Page>
  );
}

export default AboutMe;