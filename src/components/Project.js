import React from 'react';

function Project(props) {

  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container" key={props.id}>
      {/* template for single project */}
        <div className="card" style={{width: "18rem"}}>
          <img src={props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">click here</a>
          </div>
        </div>
    </div>
  );
}

export default Project