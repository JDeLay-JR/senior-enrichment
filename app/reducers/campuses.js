import axios from 'axios';


//ACTION TYPE
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const GET_CAMPUS_LIST = 'GET_CAMPUS_LIST';
const DELETE_CAMPUS = 'DELETE_CAMPUS'


//ACTION CREATOR
export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUS_LIST,
    campuses
  }
  return action
}

export function addCampus(campus) {
  const action = {
    type: ADD_NEW_CAMPUS,
    campus
  }
  return action
}

export function removeCampus(campusId) {
  const action = {
    type: DELETE_CAMPUS,
    campusId
  }
  return action
}

export function updateCampus(campusId) {
  const action = {
    type: UPDATE_CAMPUS,
    campusId
  }
  return action
}


//THUNK CREATORS
export function fetchCampuses () {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        return dispatch(action);
      })
  }
}

export function postCampus (campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses/newCampus', campus)
    .then(res => res.data)
    .then(newCampus => {
      const action = addCampus(newCampus)
      return dispatch(action);
    })
  }
}

export function deleteCampus (campusId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(() => {
      const action = removeCampus(campusId);
      return dispatch(action);
    })
  }
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUS_LIST:
      return action.campuses;
    case ADD_NEW_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter(campus => {
        if (campus.id !== action.campusId) {
          return campus
        }
      })
    default:
      return state;
  }
}

