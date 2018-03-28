//React Basics
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import App from '../App/App';
import Projects from '../Projects/Projects';

//CSS
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const SiteRouter = () => (
    <Router>
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <Navbar inverse>
                <Navbar.Header>
                    <a href="/"><Navbar.Brand>SomeNerdNamedSteve</Navbar.Brand></a>
                </Navbar.Header>
                <Nav>
                    <NavItem href="/projects">Projects</NavItem>
                </Nav>
            </Navbar>
            
            <Route exact path="/" component={App} />
            <Route path="/projects" component={Projects} />
        </div>
    </Router>
);
export default SiteRouter;