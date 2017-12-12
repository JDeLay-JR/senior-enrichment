import axios from 'axios';


//ACTION TYPE
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const GET_STUDENT_LIST = 'GET_STUDENT_LIST';
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// //ACTION CREATOR
export function addStudent(student) {
  const action = {
    type: ADD_NEW_STUDENT,
    student
  }
  return action
}

export function getStudents(students) {
    const action = {
      type: GET_STUDENT_LIST,
      students
    }
    return action
  }

  export function getSingleStudent(student) {
    const action = {
      type: GET_SINGLE_STUDENT,
      student
    }
    return action;
  }

  export function removeStudent(studentId) {
    const action = {
      type: DELETE_STUDENT,
      studentId
    }
    return action
  }

// //THUNK CREATOR

export function postStudent (student) {
  return function thunk(dispatch) {
    return axios.post('/api/students/newStudent', student)
    .then(res => res.data)
    .then(newStudent => {
      const action = addStudent(newStudent)
      return dispatch(action);
    })
  }
}

export function fetchStudents () {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        return dispatch(action);
      })
  }
}

export function fetchSingleStudent (id) {
  return function thunk(dispatch) {
    return axios.get(`/api/students/${id}`)
    .then(res => res.data)
    .then(student=> {
      const action = getSingleStudent(student);
      return dispatch(action);
    })
  }
}

export function deleteStudent (studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      const action = removeStudent(studentId);
      return dispatch(action);
    })
  }
}

// //REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case ADD_NEW_STUDENT:
      return [...state, action.student]
    case GET_STUDENT_LIST:
      return action.students;
    // case GET_SINGLE_STUDENT:
    //   return action.student;
    case DELETE_STUDENT:
      return state.filter(student => {
        if (student.id !== action.studentId) {
          return student
        }
      })
    default:
      return state;
  }
}

// const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
// const GET_STUDENT_LIST = 'GET_STUDENT_LIST';
// const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';
// const DELETE_STUDENT = 'DELETE_STUDENT';
