import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link, withRouter } from 'react-router-dom';

function StudentsList(props) {
  return (
    <div>
    <h1>Students List</h1>
    <Link to="/newStudent"><input type='submit' value='Add New Student'></input></Link>
    <Link to={'/'}><button>Home</button></Link>
    <ol>
      {
        props.students.map(student => {
          //Gets current student's campus ID
          const studentCampusId = student.campusId;

          //Finds the corresponding campus name in campus list array
          let studentCampus = props.campuses.map(campus => {
            if (campus.id === studentCampusId) {
              return campus.name
            }
          })

          return (
          <div key={student.id}>
            <Link key={student.id} to={`/student/${student.id}`} >
            <li key={student.id}>
                  {student.name} | {studentCampus}
            </li>
            </Link>
          </div>
          )
        })
      }
    </ol>
    </div>
  )
}

//CONNECT TO STORE\\
const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}


const StudentListContainer = withRouter(connect(mapStateToProps)(StudentsList));
export default StudentListContainer;


{/* <Link key={campus.id} to={`/campus/${campus.id}`}> */}
