import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import axios from 'axios'

function SingleCampusList(props) {
  let idFromURI = props.location.pathname.split("/").pop();

  function handleDelete() {
    return props.campuses.map(campus => {
      if (campus.id === parseInt(idFromURI)) {
         return axios.delete(`/api/campuses/${campus.id}`)
         .then(console.log("IT'SAH GONE"))
         .then(res => res.data)
         .catch(next);
        }
      })
    }
  return (
    <div>
      {
        props.campuses.map(campus => {
          if (campus.id === parseInt(idFromURI)) {
            return (
            <h1 key={campus.id}>{campus.name}</h1>
            )
          }
        })
      }
      <ol>
        {
          props.students.map(student => {
            if (student.campusId === parseInt(idFromURI)) {
            return (
            <div>
              <li key={student.id}><Link to={`/student/${student.id}`}>{student.name}</Link></li>
              <Link to={`/delete`}><input type='submit' onClick={handleDelete} value='Delete Campus'></input></Link>
            </div>
            )
          }
          })
        }
      </ol>
    </div>
  )
}

//CONNECT TO STORE

const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses,
    studentsAtSingleCampus: state.studentsAtSingleCampus
  }
}

const SingleCampusListContainer = connect(mapStateToProps)(SingleCampusList);
export default SingleCampusListContainer;
