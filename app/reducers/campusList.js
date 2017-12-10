import axios from 'axios';


//ACTION TYPE
const GET_CAMPUS_LIST = 'GET_CAMPUS_LIST'


//ACTION CREATOR
export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUS_LIST,
    campuses
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
        dispatch(action);
      })
  }
}

//REDUCERS
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUS_LIST:
      return action.campuses;
    default:
      return state;
  }
}

