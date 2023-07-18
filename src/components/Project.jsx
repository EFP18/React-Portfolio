import React from 'react';
import { Card, Row } from 'react-bootstrap';

function Project(props) {
  console.log(props.githubURL);
  return (
    // creating a base for the portfolio page, for each project to take this form
    <Row className='mb-4 col-xs-12 col-md-6 col-lg-4 d-flex justify-content-center'>
      <Card key={props.id} style={{ width: '18rem', padding: '0' }}>
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
    </Row>
  );
}

export default Project;
