import axios from 'axios';

//ACTION TYPE
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

//ACTION CREATOR
export function getSingleCampus(studentsAtSingleCampus) {
  const action = {
    type: GET_SINGLE_CAMPUS,
    studentsAtSingleCampus
  }
  return action;
}

//THUNK CREATOR
export function fetchSingleCampus (id) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(studentsAtSingleCampus => {
      const action = getSingleCampus(studentsAtSingleCampus);
      dispatch(action);
    })
  }
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.studentsAtSingleCampus;
    default:
      return state;
  }
}
