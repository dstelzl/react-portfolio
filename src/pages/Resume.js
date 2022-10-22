import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <h2>Front-End Skills</h2>
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

      <div>
        <h2>Back-End Skills</h2>
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
        <div>
          <a href='https://www.linkedin.com/in/deeann-stelzl-4402b9127/'
            target='_blank'rel='noopener noreferrer'>
            LinkedIn
          </a>
        </div>
        <div>
          <a href='https://www.github.com/dstelzl' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </div>
        links to github and linkedin
      </footer>
    </div>
  );
};

export default Resume;
