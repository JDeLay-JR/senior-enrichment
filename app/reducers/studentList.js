import axios from 'axios';


//ACTION TYPE
const GET_STUDENT_LIST = 'GET_STUDENT_LIST'


//ACTION CREATOR
export function getStudents(students) {
  const action = {
    type: GET_STUDENT_LIST,
    students
  }
  return action
}

//THUNK CREATOR
export function fetchStudents () {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
  }
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENT_LIST:
      return action.students;
    default:
      return state;
  }
}

