import { combineReducers } from 'redux';
import playerReducer from './player_reducer';
import gameStatusReducer from './game_status_reducer';
import currentPlayerReducer from './current_player_reducer';

const rootReducer = combineReducers({
  players:  playerReducer,
  gameStatus:  gameStatusReducer,
  currentPlayer:  currentPlayerReducer
});

export default rootReducer;
