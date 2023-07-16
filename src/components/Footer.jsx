import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../images/github-mark.png';
import linkedinLogo from '../images/LI-In-Bug.png';
import instagramLogo from '../images/logo-ig-png-32464.png';

function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <ul className='Footer'>
      <li>
        <Link to='https://github.com/EFP18'>
          <img src={githubLogo} alt='github logo' style={{ height: '40px' }} />
        </Link>
      </li>
      <li>
        <Link to='https://www.linkedin.com/in/ester-pelosof-242603228/'>
          <img
            src={linkedinLogo}
            alt='linkedin logo'
            style={{ height: '40px' }}
          />
        </Link>
      </li>
      <li>
        <Link to='https://www.instagram.com/ester_pelosof/'>
          <img
            src={instagramLogo}
            alt='instagram logo'
            style={{ height: '40px' }}
          />
        </Link>
      </li>
    </ul>
  );
}
export default Footer;
