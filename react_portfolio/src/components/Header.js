import React from 'react';

function Header() {
  const handleCustomNavigation = (destination) => {
    // Your custom navigation logic here
    console.log(`Navigating to: ${destination}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleCustomNavigation('home')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleCustomNavigation('projects')}>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleCustomNavigation('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
