import * as actionTypes from "../actions/actionsTypes";


const initialState = {
    tournaments: [],
    
    };

const tournamentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOURNAMENTS:
            return {
                ...state,
                tournaments: action.payload,
            };
        default:
            return state;
    }
}

export default tournamentsReducer;