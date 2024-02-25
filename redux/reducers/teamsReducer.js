import * as actionTypes from "../actions/actionsTypes";


/** @type {{matches: import("../../Datatypes").Match[]}} */
const initialState = {
  matches: [],

};


const macthesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TEAMS:

      return {
        ...state,
        matches: action.payload.events,
      };

    case actionTypes.GET_SINGLE_MATCHES:
      const selectedMatch = state.matches.find((match) => match.id === action.payload.id);
      return {
        ...state,
        selectedMatch,
      };
    default:
      return state;
  }
};

export default macthesReducer;