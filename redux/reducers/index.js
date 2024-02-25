import { combineReducers } from 'redux';
import macthesReducer from './teamsReducer';
import playersReducer from './playersReducer';
import tournamentsReducer from './tournamentsReducer';


const rootReducer = combineReducers({
    matches: macthesReducer,
    players: playersReducer,
    tournaments: tournamentsReducer,
  });
  
  export default rootReducer;