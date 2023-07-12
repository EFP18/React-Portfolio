import React from 'react';
import Project from './Project';
import { useEffect } from "react";
import "../styles/Portfolio.css";


function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".

// Use useEffect to set the title of the page on the tab
  useEffect(() => {
    document.title = "Portfolio";
  });

  const projects = [
    {
      id: 1, 
      title: "Marvel-Dex",
      description: "A Pokédex for Marvel Characters",
      url: "https://dylanstormjohnson.github.io/marvel-dex/",
      // relative path to image when mapping through
      image: require("../images/marveldex.png")
    },
    {
      id: 2, 
      title: "Code Trove",
      description: "Code Snippets and more!",
      url: "https://code-trove.herokuapp.com/",
      image: require("../images/codetrove.png")
    },    
    {
      id: 3, 
      title: "Employee-Tracker",
      description: "Content management system",
      url: "https://github.com/EFP18/Employee-Tracker/tree/main",
      image: require("../images/splash2.jpg")
    },
    {
      id: 4, 
      title: "J.A.T.E",
      description: "Text Editor with Offline Functionality",
      url: "https://jate-texteditor-efp18-ed59a4bb5c66.herokuapp.com/",
      image: require("../images/jate.png")
    },
  ]
  return (
    <div className="container d-flex flex-wrap justify-content-between">
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
            />
          )
        })}
    </div>
  );
}

export default Portfolio;