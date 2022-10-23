import React from 'react';

const Resume = () => {
  return (
    <div clasName='container p-5'>
      <div className='p-3 bg-dark text-light text-left'>
        <h1>see deeann's skills.</h1>
      </div>
      <div className='container d-flex'>
      <div className='row align-items-center justify-content-center'>
        <div className='p-3 col-6'>
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

        <div className='p-3 col-6'>
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
      </div>
      <footer className='footer'>
        <div className='container d-flex bg-dark text-white'>
          <div>
            <a
              href='https://www.linkedin.com/in/deeann-stelzl-4402b9127/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white p-3'
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href='https://www.github.com/dstelzl'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white p-3'
            >
              Github
            </a>
          </div>

          <div>
            <a
              href='https://drive.google.com/file/d/1fuFHb9qSifUCVO7LgUtiAHATpYjER_Is/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white p-3'
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
