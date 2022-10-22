import React from 'react';
import ProfilePicture from '../assets/images/DeeAnnHeadshot.jpeg';

const About = () => {
  return (
    <div className='container' >
      <div className='d-flex align-items-center'>
      <div className='col-4'>
      <img
        className='image-thumbnail w-75 p-3'
        src={ProfilePicture}
        alt={'DeeAnn Stelzl'}
      />
      </div>
        <div className='col-5'>
      <h1 id='about-me'>About DeeAnn Stelzl </h1>
      </div>
      
      </div>
      <div className='container p-3'>
        <p>
          After raising three kids- DeeAnn Stelzl found herself immersed inside
          the world of digital marketing - first as a project manager and then
          as a developer of landing pages and email campaigns designed to
          attract new clients and monetize website visitors. Her unique
          background sets the stage for a web developer who can visualize the
          end goal and final project long before she writes her first line of
          code.
        </p>

        <p>
          DeeAnn's technical skills include front end web development tools such
          as HTML/CSS, Javascript/jQuery, Responsive Design, React.js and
          others. She has worked on API Design, Databases such as MySQL and
          MongoDB and is familiar with deployment and delivery tools like Git,
          Shell Scripting, Github and Unit Testing.{' '}
        </p>
      </div>
    </div>
  );
};

export default About;
