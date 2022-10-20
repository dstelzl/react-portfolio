import React from 'react';

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a
          href='#home'
          onClick={() => setCurrentPage('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => setCurrentPage('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#blog'
          onClick={() => setCurrentPage('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
