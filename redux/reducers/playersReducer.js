import * as actionTypes from "../actions/actionsTypes";


const initialState = {
  players: [],

};


const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS:

      return {
        ...state,
        players: action.payload.records,
      };

    case actionTypes.GET_SINGLE_PLAYER:
      const selectedPlayer = state.players.find((player) => player.id === action.payload.id);
      return {
        ...state,
        selectedPlayer,
      };
    default:
      return state;
  }
};

export default playersReducer;