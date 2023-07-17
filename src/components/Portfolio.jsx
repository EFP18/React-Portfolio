import React from 'react';
import Project from './Project';
import '../styles/Portfolio.css';
import Page from './Page';

function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

  const projects = [
    {
      id: 1,
      title: 'Code Trove',
      description: 'Code Snippets and more!',
      url: 'https://code-trove.herokuapp.com/',
      githubURL: 'https://github.com/EFP18/Code-Trove',
      image: require('../images/codetrove.png'),
    },
    {
      id: 2,
      title: 'Marvel-Dex',
      description: 'A Pokédex for Marvel Characters',
      url: 'https://dylanstormjohnson.github.io/marvel-dex/',
      githubURL: 'https://github.com/dylanstormjohnson/marvel-dex',
      // relative path to image when mapping through
      image: require('../images/marveldex.png'),
    },
    {
      id: 3,
      title: 'Employee-Tracker',
      description: 'Content management system',
      url: 'https://github.com/EFP18/Employee-Tracker/tree/main',
      githubURL: 'https://github.com/EFP18/Employee-Tracker',
      image: require('../images/splash2.jpg'),
    },
    {
      id: 4,
      title: 'J.A.T.E',
      description: 'Text Editor with Offline Functionality',
      url: 'https://jate-texteditor-efp18-ed59a4bb5c66.herokuapp.com/',
      githubURL: 'https://github.com/EFP18/Text-Editor',
      image: require('../images/jate.png'),
    },
    {
      id: 5,
      title: 'Social Network API',
      description: 'Backend Social Network API',
      url: 'https://drive.google.com/file/d/1L763RgP0Pl-fbfj7zFm7gQ0AQSiEiNsm/view',
      githubURL: 'https://github.com/EFP18/Social-Network-API',
      image: require('../images/socialnetworkapi.png'),
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Check the weather anywhere!',
      url: 'https://efp18.github.io/Weather-Dashboard/',
      githubURL: 'https://github.com/EFP18/Weather-Dashboard',
      image: require('../images/weatherdash.png'),
    },
  ];
  return (
    <Page title={'Portfolio'}>
      <div className='container d-flex flex-wrap justify-content-between'>
        {/* use project template for each project of the list */}
        {projects.map((project) => {
          return (
            // props: title, description, url, image. Project.title etc is the value of the prop
            // dynamically change the data of the card
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image}
              githubURL={project.githubURL}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default Portfolio;
