import React from 'react';
import '../styles/AboutMe.css';
import 'bootstrap/dist/css/bootstrap.css';
import Page from './Page';
import pictureSp from '../images/splash2.jpg';
import headShot from '../images/headshotPortfolio.png';
import { Row, Col } from 'react-bootstrap';

function AboutMe() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={'Ester Pelosof - Home'}>
      <Row>
        <img
          className='imageAboutMe'
          src={pictureSp}
          alt='aboutMeImage'
          style={{ paddingBottom: '50px', width: '100%' }}
        />

        <Col sm={2}>
          <img
            src={headShot}
            className='rounded-circle'
            alt='headshot'
            style={{ height: '150px', marginLeft: '50px', width: '110px' }}
          />
        </Col>
        <Col sm={10}>
          <div className='mb-3 ml-4'>
            <div className='card-body aboutMeText'>
              <h5 className='card-title cardTitle mb-4'>
                Hey! My name is Ester!
              </h5>
              <p className='card-text aboutMeText'>
                Very methodical and hard working, I enjoy solving puzzles and
                answering complex questions. I am very passionate about
                languages and I'm very interested in learning some programming
                languages as well, to combine them with creativity. I am very
                eager to learn, well-organized, and I work very well with
                deadlines.
              </p>
              <p className='card-text aboutMeText'>
                I studied Linguistics at the University of Groningen in the
                Netherlands. I'm really passionate about studying different
                languages, and I find the creation of different structures and
                sentences very interesting, which is why I decided to study
                programming languages and coding.
              </p>
              <p className='card-text'>
                <small className='text-muted smallMsg'>
                  Contact me for more information!!
                </small>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Page>
  );
}

export default AboutMe;
