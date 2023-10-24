import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending an email or making an API request.
  };

  return (
    <div className="container">
      <h1 className="mt-5">Contact Me</h1>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>Email: faheemlfc@gmail.com</p>
          <p>
            <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
              View My CV (PDF)
            </a>
          </p>
          <p>
            <a href="https://github.com/b70b70" target="_blank" rel="noopener noreferrer">
              My GitHub Profile
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/faheem-a-8a7a5623b/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>

        <div className="col-md-6">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
