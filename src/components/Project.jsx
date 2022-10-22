import React from 'react'
import image from './../assets/images';


const Project = ({information}) => {
  return (
    
    <div>
      <div className='card' >
      <div classname = 'container width 8rem'>
      <div classname = 'row d-flex'>
      <div classname = 'col-8 justify-content-center'></div> 
    <h3>{information.name}</h3>  
    <img src= {information.image} alt="screenshot" />
<div>
{information.technologies.map(tech => (
  <p>{tech}</p>
))}
</div>
<div>
    <a href= {information.repository}>GitHub Repo Link</a>
    </div>
    <div>
    <a href= {information.url}>Deployed Application</a>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Project