import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//IMPORT SUB_REDUCERS
import students from './reducers/students';
import campuses from './reducers/campuses';

const rootReducer = combineReducers({
  students,
  campuses,
})

 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));

 export default store

 //EXPORT ALL ACTION CREATORS
 export * from './reducers/students'
 export * from './reducers/campuses'

