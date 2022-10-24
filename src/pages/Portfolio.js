import React from 'react'
import Project from '../components/Project';
import projects from '../info/projects';


const Portfolio = () => {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-5'>
    <h1>see deeann's projects.</h1>
    </div>

  <div className='container'>
  <div className='row'> 
{projects.map(project => (
  <Project information = {project} />
))}
 </div>  
 </div>
    
    </>
  )
}

export default Portfolio