
import { GET_SINGLE_MATCHES, GET_TEAMS } from '../actions/actionsTypes';
import ApiService from '../api/api';


export const getTeams = () => async (dispatch) => {
    try {
      const response = await ApiService.getteams();
        dispatch({ type: GET_TEAMS, payload: response });
    }
    catch (error) {
        console.log('Error fetching teams', error);
    }
  };


  export const getSingleMatch = (id) => async (dispatch) => {
    try {
      const response = await ApiService.getSingleMatch(id);
        dispatch({ type: GET_SINGLE_MATCHES, payload: response });
    }
    catch (error) {
        console.log('Error fetching teams', error);
    }
  }
