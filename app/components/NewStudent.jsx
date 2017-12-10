import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios';

function NewStudent(props) {
    return (
      <div>
        <h1>Add a New Student</h1>
        <form>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="GPA"></input>
          <select>
            {
              props.campuses.map(campus => {
                return (
                  <option value={campus.id}>{campus.name}</option>
                )
              })
            }
          </select>
          <button>Submit</button>
        </form>
      </div>
    )
}

{/* <Redirect push to="/campuses" /> */}

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}


const NewStudentContainer = connect(mapStateToProps)(NewStudent);
export default NewStudentContainer;
