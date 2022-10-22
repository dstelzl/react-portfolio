import React from 'react'



const Project = ({information}) => {
  return (
 
    <div>

   
    <h4>{information.name}</h4>  
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
    
  )
}

export default Project