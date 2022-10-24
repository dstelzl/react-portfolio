import React from 'react'



const Project = ({information}) => {
  return (
 

<div className='col-12 col-md-4 d-flex flex-column justify-content-center align-items-center m-3 bg-dark text-white p-3 '>

   
    <h4 className=''>{information.name}</h4>  
    <img src= {information.image} alt="screenshot"
    className=''
    />
    <div className='d-flex justify-content-around'>
{information.technologies.map(tech => (
  <p className=''>{tech}, </p>
))}
  </div>


    <a className= 'text-white' href= {information.repository}>GitHub Repo</a>

    <a className= 'text-white' href= {information.url}>Deployed Application</a>

    </div>
    
    
  )
}

export default Project