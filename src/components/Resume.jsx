import React from "react";
import resume from "../images/resume.pdf";
import Page from "./Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";

function Resume() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={"Resume"}>
        <Container>
          <Row>
            <Col>
              <h1>Skills</h1>
              <p>Languages: HTML, CSS, JAVASCRIPT</p>
              <p>
                Applications: Bootstrap, jQuery, Node.js, GitHub, Express.js,
                React.js, SQL
              </p>
            </Col>
            <Col>
              <h1>Education</h1>
              <p>Vanderbilt: Full Stack Web Development</p>
              <p>
                University of Groningen: Linguistics - European Languages and
                Cultures
              </p>
            </Col>
            <a href={resume} download className="btn btn-primary">
              Click here to download my resume!
            </a>
          </Row>
        </Container>
    </Page>
  );
}

export default Resume;
