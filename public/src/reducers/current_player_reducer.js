import * as types from '../actions/types';


export default function(state = 0, action) {
  switch (action.type) {
    case types.SET_GAME_STATUS: 
      return 0;

    case types.UPDATE_ROUND:
      console.log('ppp',action.payload.currentPlayer);
      return action.payload.currentPlayer;

    case types.RESET:
      return 0;

    default:
      return state;
  }
}