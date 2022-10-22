import React from 'react';

const Resume = () => {
  return (
    <div clasName="container p-5">
     <div className='p-3'><h1>Resume</h1></div> 
      <div className='p-3'>
        <h3>Front-End Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className='p-3'>
        <h3>Back-End Skills</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>jQuery</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQl</li>
        </ul>
      </div>
      <footer>
        <div className='p-3 row justify-content-center'>
          <a href='https://www.linkedin.com/in/deeann-stelzl-4402b9127/'
            target='_blank'rel='noopener noreferrer'>
            LinkedIn
          </a>
        <div></div>
          <a href='https://www.github.com/dstelzl' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </div>
      
      </footer>
    </div>
  );
};

export default Resume;
