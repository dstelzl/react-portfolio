import React from 'react'
import Project from '../components/Project';
import projects from '../info/projects';


const Portfolio = () => {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
    <h1>check out deeann's projects.</h1>
    </div>

<div>
  <div> 
{projects.map(project => (
  <Project information = {project} />
))}
 </div>  
</div>
    
    </>
  )
}

export default Portfolio