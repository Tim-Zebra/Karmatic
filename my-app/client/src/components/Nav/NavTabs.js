import React from 'react';

// Navbar that highlights which link is active
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          href="#page1"
          onClick={() => handlePageChange('Page1')}
          className={currentPage === 'Page1' ? 'nav-link active' : 'nav-link'}
        >
          Page1
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#page2"
          onClick={() => handlePageChange('Page2')}
          className={currentPage === 'Page2' ? 'nav-link active' : 'nav-link'}
        >
          Page2
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#page3"
          onClick={() => handlePageChange('Page3')}
          className={currentPage === 'Page3' ? 'nav-link active' : 'nav-link'}
        >
          Page3
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;