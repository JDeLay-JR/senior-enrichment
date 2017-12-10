import React, { Component } from 'react';
import { Redirect } from 'react-router'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectCampus: false,
      redirectStudents: false
    }
    //Bind onClicks to this
    this.handleCampusOnClick = this.handleCampusOnClick.bind(this);
    this.handleStudentsOnClick = this.handleStudentsOnClick.bind(this);
  }

  //Redirect onClick Function Handlers
    handleCampusOnClick() {
    this.setState({redirectCampus: true})
  }
    handleStudentsOnClick() {
    this.setState({redirectStudents: true})
  }

  render() {
    //If redirect state changes render the correct component
    if (this.state.redirectCampus) {
      return <Redirect push to="/campuses" />;
    }
    if (this.state.redirectStudents) {
      return <Redirect push to="/students" />;
    }

    return (
      <div>
      <h3>Home</h3>
      <input type="button" onClick={this.handleCampusOnClick} value="Campuses (Campi?)" />
      <input type="button" onClick={this.handleStudentsOnClick} value="Students" />
    </div>
    )
  }
}
