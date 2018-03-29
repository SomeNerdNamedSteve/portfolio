import React, { Component } from 'react';
import Project from '../Project/Project';

class Projects extends Component {

  constructor(){
    super();
    this.state = {
      hasProjects: false
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    const { hasProjects } = this.state;
    return hasProjects ? this.renderProjects(this.state.projects) : (
      <div> 
        Loading Projects...
      </div>
    );
  
  }

  fetchData(){
    fetch('/api/projects')
      .then(response => response.json())
      .then(projectsList => this.setState(prevState => {
        return {
          projects: projectsList,
          hasProjects: true
        };
      }))
      .catch(err => console.log(err));
  }

  renderProjects(projects){
    return projects.map(project => <Project title={project.name} description={project.description} />)
  }

}

export default Projects;