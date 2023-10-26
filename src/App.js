import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ProjectDetail from './components/ProjectDetail';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS



function App() {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/react_portfolio" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

