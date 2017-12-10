import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components I made
import Home from './Home.jsx'
import CampusList from './CampusList.jsx'
import StudentsList from './StudentsList.jsx'
import IndividualCampus from './IndividualCampus.jsx'
import NewCampus from './NewCampus.jsx'
import NewStudent from './NewStudent.jsx'
import IndividualStudent from './IndividualStudent.jsx'
import DeleteConfirm from './DeleteConfirm.jsx'

//Importing the store and all the thunks
import store, {fetchStudents, fetchCampuses, fetchSingleCampus, getSingleCampus, postStudent, fetchSingleStudent, deleteStudent} from '../store'


export default class Main extends Component {

  componentDidMount() {

    //For Students List
    const getStudentListThunk = fetchStudents();
    const getCampusListThunk = fetchCampuses();
    const getSingleCampusThunk = fetchSingleCampus();
    const addStudentThunk = postStudent();
    const fetchSingleStudentThunk = fetchSingleStudent();
    store.dispatch(getStudentListThunk);
    store.dispatch(getCampusListThunk);
    store.dispatch(getSingleCampusThunk);
    store.dispatch(addStudentThunk);
    store.dispatch(fetchSingleStudentThunk);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/delete" component={DeleteConfirm} />
            <Route path="/student/:id" component={IndividualStudent} />
            <Route exact path="/students" component={StudentsList} />
            <Route path='/campus/:id' component={IndividualCampus} />
            <Route exact path='/campuses' component={CampusList} />
            <Route exact path='/newStudent' component={NewStudent}/>
            {/* <Header/> */}
            {/* <NewCampus/> */}
            <Route component={Home} />
            </Switch>
        </div>
      </Router>
    )
  }
}

//MAY BE ISSUE WITH student/:id ===> students/:id
