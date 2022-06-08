import React from 'react';

// Navbar that highlights which link is active
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;