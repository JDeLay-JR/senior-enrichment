import React, {Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class NewStudent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        gpa: 0,
        campusId: 0
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
      this.handleLastNameChange = this.handleLastNameChange.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handleGPAChange = this.handleGPAChange.bind(this)
      this.handleCampusChange = this.handleCampusChange.bind(this)
    }

    handleSubmit(event) {
      const studentToAdd = this.state
      axios.post('/api/students/newStudent', studentToAdd)
      .then(res => res.data)
      event.preventDefault();
    }

    handleFirstNameChange(event) {
      this.setState({firstName: event.target.value})
    }
    handleLastNameChange(event) {
      this.setState({lastName: event.target.value})
    }
    handleEmailChange(event) {
      this.setState({email: event.target.value})
    }
    handleGPAChange(event) {
      this.setState({gpa: event.target.value})
    }
    handleCampusChange(event) {
      this.setState({campusId: event.target.value })
    }

    render () {
      console.log('STATE => ', this.state)
      return (
      <div>
        <h1>Add a New Student</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleFirstNameChange} placeholder="First Name"></input>
          <input type="text" onChange={this.handleLastNameChange} placeholder="Last Name"></input>
          <input type="email" onChange={this.handleEmailChange} placeholder="Email"></input>
          <input type="number" step="0.01" min="0" max="4" onChange={this.handleGPAChange} placeholder="GPA"></input>
          <select onChange={this.handleCampusChange}>
            {
              this.props.campuses.map(campus => {
                return (
                  <option value={campus.id}>{campus.name}</option>
                )
              })
            }
          </select>
          <button>Submit</button>
          <NavLink to={'/students'}><button>Home</button></NavLink>
        </form>
      </div>
      )
    }
}

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}


const NewStudentContainer = connect(mapStateToProps)(NewStudent);
export default NewStudentContainer;
