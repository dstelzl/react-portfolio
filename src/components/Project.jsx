import React from 'react'



const Project = ({information}) => {
  return (
 
<div className='container d-flex'>
<div className='row bg-warning col-5'>
  <div className='card'></div>
   
    <h4 className=''>{information.name}</h4>  
    <img src= {information.image} alt="screenshot"
    className=''
    />
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
    
  )
}

export default Project