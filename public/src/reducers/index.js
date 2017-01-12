import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import playerReducer from './player_reducer';
import gameStatusReducer from './game_status_reducer';
import currentPlayerReducer from './current_player_reducer';


const rootReducer = combineReducers({
  players:  undoable(playerReducer),
  gameStatus:  undoable(gameStatusReducer),
  currentPlayer:  undoable(currentPlayerReducer)
});

export default rootReducer;
