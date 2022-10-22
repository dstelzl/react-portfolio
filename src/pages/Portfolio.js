import React from 'react'
import Project from '../components/Project';
import projects from '../info/projects';


const Portfolio = () => {
  return (
    <div>
{projects.map(project => (
  <Project information = {project} />
))}
    </div>
  )
}

export default Portfolio