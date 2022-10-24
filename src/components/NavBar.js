import React from 'react';

function NavBar({ currentPage, setCurrentPage }) {
  console.log(currentPage)
  return (
    <nav className='nav justify-content-center bg-dark fs-4 p-3'>
     
      <div className='nav-item m-2'>
        <a
          href='#about'
          onClick={() => setCurrentPage('About')}

          className={currentPage === 'About' ? 'text-white' : 'text-secondary'}
        >
          About
        </a>
      </div>
      <div className='nav-item m-2'>
        <a
          href='#contact'


          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'text-white' : 'text-secondary'}
        >
          Contact
        </a>
      </div>
      <div className='nav-item m-2'>
        <a
          href='#portfolio'
          onClick={() => setCurrentPage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'text-white' : 'text-secondary'}
        >
          Portfolio
        </a>
      </div>
      <div className='nav-item m-2'>
        <a
          href='#resume'
          onClick={() => setCurrentPage('Resume')}
       

          className={currentPage === 'Resume' ? 'text-white' : 'text-secondary'}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
