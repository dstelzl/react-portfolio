import React from 'react';

const Resume = () => {
  return (
    <div clasName='container p-5'>
      <div className='p-3 bg-light text-dark text-center'>
        <h1>Resume</h1>
      </div>
      <div className='display-flex row'>
        <div className='p-3  text-center row bg-dark text-light'>
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

        <div className='p-3 text-center row bg-dark text-light'>
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
      </div>
      <footer className='footer'>
        <div className='container d-flex '>
          <div>
            <a
              href='https://www.linkedin.com/in/deeann-stelzl-4402b9127/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark p-3'
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href='https://www.github.com/dstelzl'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark p-3'
            >
              Github
            </a>
          </div>

          <div>
            <a
              href='https://drive.google.com/file/d/1fuFHb9qSifUCVO7LgUtiAHATpYjER_Is/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark p-3'
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
