import React, { Component } from 'react';


class Project extends Component {

  render() {
    return (
        <div>
          <h3>{ this.props.title }</h3>
          <p>{ this.props.description }</p>
        </div>
    );
  }
}

export default Project;