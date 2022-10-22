import React from 'react'

const Project = ({information}) => {
  return (
    <div>
    <h3>{information.name}</h3>  
    {/* <img src= {information.screenshot} alt="screenshot" /> */}
<div>
{information.technologies.map(tech => (
  <p>{tech}</p>
))}
</div>
    <a href= {information.repository}>REPO LINK:</a>
    <a href= {information.url}>URL LINK:</a>

    </div>
  )
}

export default Project