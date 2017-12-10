import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

export default class DeleteConfirm extends Component {
  render() {
    return (
      <div>
        <h1>Deletion was successful!</h1>
          <Link to='/'><button>Home</button></Link>
      </div>
    )
  }
}
