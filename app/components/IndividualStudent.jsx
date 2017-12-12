import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteStudent } from '../store'

function SingleStudent(props) {
  return (
    <div>
      <div>
        <h1>Student Information</h1>
        <h4>NAME: {props.studentObj.name}</h4>
        <h4>EMAIL: {props.studentObj.email}</h4>
        <h4>GPA: {props.studentObj.gpa}</h4>
        <h4>CAMPUS:  <Link to={`/campus/${props.studentObj.campusId}`}> {props.singleCampus.name} </Link></h4>

        <button onClick={props.handleDelete}>Delete</button>
        <Link to={'/'}><button>Home</button></Link>
      </div>
    </div>
  )
}


const mapStateToProps = function (state, ownProps) {

  const currentStudentId = Number(ownProps.match.params.id);
  const studentObj = state.students.find(student => {
    if (student.id === currentStudentId) {
      return student
    }
  })
  console.log(studentObj)
  const singleCampus = state.campuses.find(campus => {
    if (campus.id === studentObj.campusId) {
      return campus
    }
  })
  return {
    students: state.students,
    campuses: state.campuses,
    studentObj,
    singleCampus
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  const currentStudentId = Number(ownProps.match.params.id);
  return {
    handleDelete(event) {
      event.preventDefault();
      dispatch(deleteStudent(currentStudentId))
      ownProps.history.push('/students');
    }
  }
}

  const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
  export default SingleStudentContainer;
