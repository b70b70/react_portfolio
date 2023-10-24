import React from 'react';
import profileImage from '../assets/profile.jpg'; // Import the image


function HomePage() {
    return (
      <div className="jumbotron p-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-4">
                <span className="text-decoration-underline">Your Name's</span> Dynamic
                Portfolio of Vision and Design Excellence
              </h1>
              <p className="lead">
                Hi, my name is Your Name, and I'm a Web Developer. I'm passionate about
                programming, and I'm from Your Location. As a web developer, I always strive
                to combine creativity and problem-solving to build high-quality websites.
              </p>
              <hr className="my-4" />
  
              {/* Icons and links */}
              <div className="social-icons">
              <a href="https://github.com/b70b70" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/faheem-a-8a7a5623b/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="bi-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
            <div className="col-md-4 text-center">
              <img
                src={profileImage}
                alt="Profile Picture"
                className="img-fluid rounded-circle mt-4"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
