import * as types from '../actions/types';

import immutable from 'immutable';

const { Map, List } = immutable;

const initialState = List([]);

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return state.push(Map({
        sum: 501,
        records: List([List([0,0,0])])
      }));
    case types.UPDATE_SCORE:
      const { currentPlayer, currentRound, currentDart,score }  = action.payload;
      // console.log(currentPlayer, currentRound, currentDart,score, state)
      // console.log('rrrrrrrr',currentRound)
      // console.log('pppppp',currentPlayer)
      return state.setIn([currentPlayer, 'records' ,currentRound, currentDart], score);


    case types.UPDATE_ROUND:
      const np = nextPlayer(state.size, +action.payload.currentPlayer);
      return state.setIn([np, 'records'], state.get(np).get('records').push(List([0,0,0])));
    case types.RESET:
      return initialState;

    default:
      return state;
  }
}

function nextPlayer(sum, player) {
  if(player + 1 >= sum) {
    return 0;
  } else {
    return player + 1; 
  }
}