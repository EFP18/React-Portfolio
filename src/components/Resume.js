import React from 'react';
import resume from '../images/resume.pdf'
import Page from './Page';

function Resume() {

  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <Page title={'Resume'}>
      <div className="card skills">
        {/* <h5 className="card-header skills">Skills & Education</h5> */}
        <div className="card-body skills">
          <h5 className="card-title">Skills</h5>
          <p className="card-text">Languages: HTML, CSS, JAVASCRIPT</p>
          <p className="card-text">Applications: Bootstrap, jQuery, Node.js, GitHub, Express.js, React.js, SQL</p>
          <a href={resume} download className="btn btn-primary">Click here to download my resume!</a>
        </div>
      </div>
    </Page>
  );
}

export default Resume;