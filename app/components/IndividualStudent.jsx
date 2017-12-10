import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios';

function SingleStudent(props) {

  let idFromURI = props.location.pathname.split('/').pop();
  function handleDelete() {
  return props.students.map(student => {
    if (student.id === parseInt(idFromURI)) {
       return axios.delete(`/api/students/${student.id}`)
       .then(console.log("IT'SAH GONE"))
       .then(res => res.data)
       .catch(next);
      }
    })
  }
  return (
    <div>
      {
        props.students.map(student => {
          if (student.id === parseInt(idFromURI)) {
            let campusName = props.campuses.map(campus => {
              if (campus.id === student.campusId) {
                return campus.name
              }
            })
            return(
              <div>
                <h1>Student Information</h1>
                <h4>NAME: {student.name}</h4>
                <h4>EMAIL: {student.email}</h4>
                <h4>GPA: {student.gpa}</h4>
                <h4>CAMPUS:  <Link to={`/campus/${student.campusId}`}>{campusName} </Link></h4>
                <Link to={`/delete`}><input type='submit' onClick={handleDelete} value='Delete'></input></Link>
              </div>
            )
          }
        })
      }
    </div>
  )
}

{/* <Redirect push to="/campuses" /> */}

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default SingleStudentContainer;

