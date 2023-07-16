import React from 'react';
import resume from '../images/resume.pdf';
import Page from './Page';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import { Link } from "react-router-dom";

function Resume() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={'Resume'}>
      <Container>
        <Row>
          <h1>Skills</h1>
          <p>Languages: HTML, CSS, JAVASCRIPT</p>
          <p>
            Applications: Bootstrap, jQuery, Node.js, GitHub, Express.js,
            React.js, SQL
          </p>

          <h1>Education</h1>
          <p>Vanderbilt: Full Stack Web Development</p>
          <p>
            University of Groningen: Linguistics - European Languages and
            Cultures
          </p>
        </Row>
      </Container>
      <a
        href={resume}
        download
        className='btn btn-primary'
        style={{ width: '100px', margin: 'auto' }}
      >
        Resume
      </a>
    </Page>
  );
}

export default Resume;
