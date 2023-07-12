import React from 'react';
import "../styles/Portfolio.css";


function Project(props) {

  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div key={props.id} className="card m-4" style={{flexBasis: '27%'}}>
      <img src={props.image} className="card-img-top" alt="imageOfProject" style={{ objectFit: 'cover', height: '200px'}} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-primary">Click here to see the project!</a>
        <a href={props.githubURL} className="btn btn-primary mt-1 ">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;