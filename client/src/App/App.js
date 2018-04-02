import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Custom components
import Projects from '../Projects/Projects';
import PageCard from '../PageCard/PageCard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <PageCard />
            <br />
            <PageCard />
        </div>
    </Router>
    );
  }
}

export default App;
