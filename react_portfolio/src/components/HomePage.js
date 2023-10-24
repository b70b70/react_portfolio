import React from 'react';
import profileImage from '../assets/profile.jpg'; // Import the image

function HomePage() {
    return (
      <div className="jumbotron p-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-4">
                <span className="text-decoration-underline">Faheem's</span> Dynamic
                Portfolio of Vision and Design Excellence Built with React JS
              </h1>
              <p className="lead">
                Hi, my name is Faheem, and I'm a Web Developer. I'm passionate about
                programming, and I'm from Birmingham. As a web developer, I always strive
                to combine creativity and problem-solving to build high-quality websites.
              </p>
              <hr className="my-4" />
            </div>
            <div className="col-md-4 text-center">
              <img
                src={profileImage} // Use the imported image
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
