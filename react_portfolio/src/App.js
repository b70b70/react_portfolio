import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
    };
  }

  handleNavigation = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage() {
    switch (this.state.currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header onNavigate={this.handleNavigation} />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
