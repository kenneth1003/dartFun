import * as types from '../actions/types';

import immutable from 'immutable';

const { Map, List } = immutable;
const initialState = Map({ currentRound:0, status: 0, type: 'criket', playing: false, currentDart: 0 });
export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_GAME_STATUS: 
      return state;
    case types.UPDATE_SCORE:
      return state.set('currentDart', action.payload.currentDart);
    case types.UPDATE_ROUND:
      const cr = state.get('currentRound');
      if(action.payload.isNextRound){
        const newState = state.set('currentRound', cr + 1)
        return newState;
      }
      return state;
    case types.UPDATE_SCORE: 
      return state.set('playing', true);
    case types.SET_GAME:
      return state.set('type', action.payload);
    case types.RESET:
      return initialState;
    default:
      return state;
  }
}