import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { deleteCampus } from '../store'


function SingleCampus(props) {
  return (
    <div>
      <h1>{props.thisCampus.name}</h1>
      <h4>Students:</h4>
      <ol>
        {
          props.students.map(student => {
            return (
            <div>
              <li key={student.id}><Link to={`/student/${student.id}`}>{student.name}</Link></li>
            </div>
            )
          })
        }
      </ol>
      <button onClick={props.handleDelete}>Delete</button>
      <Link to={'/'}><button>Home</button></Link>
    </div>
  )
}

//CONNECT TO STORE
const mapStateToProps = function (state, ownProps) {

    const currentCampusId = Number(ownProps.match.params.id);

    const thisCampus = state.campuses.find(campus => {
      if (campus.id === currentCampusId) {
        return campus
      }
    })

    const students = state.students.filter(student => {
      if (student.campusId === thisCampus.id) {
        return student
      }
    })

    console.log("STUDENTS  ", students)

    console.log("THIS CAMPUS ", thisCampus)
    return {
      students,
      campuses: state.campuses,
      thisCampus
    }
  }

  const mapDispatchToProps = function (dispatch, ownProps) {
    const currentCampusId = Number(ownProps.match.params.id);
    return {
      handleDelete(event) {
        event.preventDefault();
        dispatch(deleteCampus(currentCampusId))
        ownProps.history.push('/campuses');
      }
    }
  }

  const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
  export default SingleCampusContainer

