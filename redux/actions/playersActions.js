
import { GET_PLAYERS, GET_SINGLE_PLAYER } from '../actions/actionsTypes';
import ApiService from '../api/api';


export const getPlayers = () => async (dispatch) => {
    try {
      const response = await ApiService.getPlayers();
        dispatch({ type: GET_PLAYERS , payload: response });
    }
    catch (error) {
        console.log('Error fetching players', error);
    }
  };


  export const getSinglePlayer = (id) => async (dispatch) => {
    try {
      const response = await id;
        dispatch({ type: GET_SINGLE_PLAYER, payload: response });
    }
    catch (error) {
        console.log('Error fetching player', error);
    }
  }
