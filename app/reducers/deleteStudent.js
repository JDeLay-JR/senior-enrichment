import axios from 'axios';

//ACTION TYPE
const DELETE_STUDENT = 'DELETE_STUDENT';

//ACTION CREATOR
export function removeStudent(studentToRemove) {
  const action = {
    type: DELETE_STUDENT,
    studentToRemove
  }
}

//THUNK CREATOR
export function deleteStudent (studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/student/${studentId}`)
    .then(res => res.data)
    .then(student => {
      const action = removeStudent(student);
      dispatch(action);
    })
  }
}

//REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {
    case DELETE_STUDENT:
      return action.deleteStudent;
    default:
      return state;
  }
}
