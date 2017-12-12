import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

function CampusList(props) {
  return (
    <div>
      <h1>Campus List</h1>
      <ul>
        {
          props.campuses.map(campus => {
            return (
              <div>
                <Link key={campus.id} to={`/campus/${campus.id}`}>

                <li> {campus.name} </li>
                <img src={campus.imgUrl} />

                </Link>
              </div>
            )
          })
        }
      </ul>
      <Link to={'/newCampus'}><button>Add New Campus</button></Link>
      <Link to={'/'}><button>Home</button></Link>
    </div>
  )
}

//CONNECT TO STORE
const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const CampusListContainer = connect(mapStateToProps)(CampusList)
export default CampusListContainer;
