import axios from 'axios';

//ACTION TYPE
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';

//ACTION CREATOR
export function addStudent(addStudent) {
  const action = {
    type: ADD_NEW_STUDENT,
    addStudent
  }
}

//THUNK CREATOR
export function postStudent (addStudent) {
  return function thunk(dispatch) {
    return axios.post('/api/students/', addStudent)
    .then(res => res.data)
    .then(newStudent => {
      const action = addStudent(newStudent)
      dispatch(action);
    })
  }
}

//REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {
    case ADD_NEW_STUDENT:
      return action.addStudent;
    default:
      return state;
  }
}
