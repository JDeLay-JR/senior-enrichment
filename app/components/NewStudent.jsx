import React, {Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { postStudent } from '../store'

function NewStudent(props) {
  return (
  <div>
    <h1>Add a New Student</h1>
    <form id="newStudent" onSubmit={props.handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name"></input>
      <input name="lastName" type="text" placeholder="Last Name"></input>
      <input name="email" type="email" placeholder="Email"></input>
      <input name="gpa" type="number" step="0.01" min="0" max="4" placeholder="GPA"></input>

      <select name="campusId">
        {
          props.campuses.map(campus => {
            return (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
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

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const form = document.getElementById('newStudent')
      const studentToAdd = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        gpa: event.target.gpa.value,
        campusId: event.target.campusId.value
      }
      dispatch(postStudent(studentToAdd))
      form.reset();
      ownProps.history.push('/students')
    }
  }
}

const NewStudentContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudent);
export default NewStudentContainer;
