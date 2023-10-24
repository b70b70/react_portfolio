import React from 'react';

function Header(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.onNavigate('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.onNavigate('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.onNavigate('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  

export default Header;
