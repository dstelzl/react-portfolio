import React from 'react'
import Project from '../components/Project';
import projects from '../info/projects';


const Portfolio = () => {
  return (
    <>
    <div>
    <h1>Projects</h1>
   
{projects.map(project => (
  <Project information = {project} />
))}
    </div>
   
    
    </>
  )
}

export default Portfolio