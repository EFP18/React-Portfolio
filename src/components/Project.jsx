// import React from 'react';
// import "../styles/Portfolio.css";

// function Project(props) {

//   // All functional components must have a return method that contains JSX.
//   // We return all the JSX inside a parent element with a className of "container".
//   return (
//     <div key={props.id} className="card m-4" style={{flexBasis: '27%'}}>
//       <img src={props.image} className="card-img-top" alt="imageOfProject" style={{ objectFit: 'cover', height: '200px'}} />
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.description}</p>
//         <a href={props.url} className="btn btn-primary">Click here to see the project!</a>
//         <a href={props.githubURL} className="btn btn-primary mt-1 ">GitHub Repo</a>
//       </div>
//     </div>
//   );
// }

// export default Project;

import React from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    //     <div key={props.id} className="card m-4" style={{flexBasis: '27%'}}>
    //       <img src={props.image} className="card-img-top" alt="imageOfProject" style={{ objectFit: 'cover', height: '200px'}} />
    //       <div className="card-body">
    //         <h5 className="card-title">{props.title}</h5>
    //         <p className="card-text">{props.description}</p>
    //         <a href={props.url} className="btn btn-primary">Click here to see the project!</a>
    //         <a href={props.githubURL} className="btn btn-primary mt-1 ">GitHub Repo</a>
    //       </div>
    //     </div>
    //   );

    <Card key={props.id} style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src={props.image}
        alt='imageOfProject'
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.url}>Link to project</Card.Link>
        <Card.Link href={props.githubURL}>GitHub Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
