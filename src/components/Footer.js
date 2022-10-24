import React from 'react';

function Footer({ currentPage, setCurrentPage }) {
  console.log(currentPage)
  return (

 <footer className='footer'>
 <div className='container-fluid d-flex bg-dark text-white'>
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
  );
}

export default Footer;