import React, {Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { postCampus } from '../store'

function NewCampus(props) {
  return (
  <div>
    <h1>Add a New Campus</h1>
    <form id="newCampus" onSubmit={props.handleSubmit}>
      <input name="campusName" type="text" placeholder="Campus Name"></input>
      <input name="imgUrl" type="text" placeholder="Image URL"></input>
      <input name="campusDescription" type="text" placeholder="Campus Description"></input>
      <button>Submit</button>
      <NavLink to={'/campuses'}><button>Home</button></NavLink>
    </form>
  </div>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const form = document.getElementById('newCampus')
      const campusToAdd = {
        name: event.target.campusName.value,
        description: event.target.campusDescription.value,
        imgUrl: event.target.imgUrl.value
      }
      dispatch(postCampus(campusToAdd))
      form.reset();
    }
  }
}

const NewCampusContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampus);

export default NewCampusContainer;
