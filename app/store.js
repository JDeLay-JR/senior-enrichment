import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//IMPORT SUB_REDUCERS
import students from './reducers/studentList';
import campuses from './reducers/campusList';
import studentsAtSingleCampus from './reducers/singleCampus';
import addStudent from './reducers/addStudent'
import student from './reducers/singleStudent'
import studentToRemove from './reducers/deleteStudent'


const rootReducer = combineReducers({
  students,
  campuses,
  studentsAtSingleCampus,
  addStudent,
  student,
  studentToRemove
})

 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

 export default store

 //EXPORT ALL ACTION CREATORS
 export * from './reducers/studentList'
 export * from './reducers/campusList'
 export * from './reducers/singleCampus'
 export * from './reducers/addStudent'
 export * from './reducers/singleStudent'
 export * from './reducers/deleteStudent'
