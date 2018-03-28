import React from 'react';
import App from '../App/App';
import Projects from '../Projects/Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const SiteRouter = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
);
export default SiteRouter;