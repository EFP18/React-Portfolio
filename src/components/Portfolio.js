import React from 'react';
import Project from './Project';
import { useEffect } from "react";

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
      title: "Project 1",
      description: "it's project 1!!!",
      url: "stick url here",
      // relative path to image when mapping through
      image: require("../images/yellowWall.jpg")
    },
    {
      id: 2, 
      title: "Project 2",
      description: "it's project 1!!!",
      url: "stick url here",
      image: "img"
    },    
    {
      id: 3, 
      title: "Project 3",
      description: "it's project 1!!!",
      url: "stick url here",
      image: "img"
    },
    {
      id: 4, 
      title: "Project 4",
      description: "it's project 1!!!",
      url: "stick url here",
      image: "img"
    },
  ]
  return (
    <div className="container">
      {/* use project template for each project of the list */}
      <div>
        {projects.map((project) => {
          return (
            // props: title, description, url, image. Project.title etc is the value of the prop
            // dynamically change the data of the card
            <div> <Project key={project.id} title={project.title} description={project.description} url={project.url} image={project.image} /> </div>
          )
        })}
      </div>
    </div>
  );
}

export default Portfolio;