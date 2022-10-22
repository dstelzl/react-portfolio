import React from 'react';

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav className='nav justify-content-center'>
      <div className='nav-item'>
        <a
          href='#about'
          onClick={() => setCurrentPage('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </div>
      <div className='nav-item'>
        <a
          href='#contact'


          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
      <div className='nav-item'>
        <a
          href='#portfolio'
          onClick={() => setCurrentPage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </div>
      <div className='nav-item'>
        <a
          href='#resume'
          onClick={() => setCurrentPage('Resume')}
       

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
