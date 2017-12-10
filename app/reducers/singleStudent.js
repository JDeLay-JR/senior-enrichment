import axios from 'axios';

//ACTION TYPE
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';

//ACTION CREATOR
export function getSingleStudent(student) {
  const action = {
    type: GET_SINGLE_STUDENT,
    student
  }
  return action;
}

//THUNK CREATOR
export function fetchSingleStudent (id) {
  return function thunk(dispatch) {
    return axios.get(`/api/student/${id}`)
    .then(res => res.data)
    .then(student=> {
      const action = getSingleStudent(student);
      dispatch(action);
    })
  }
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
