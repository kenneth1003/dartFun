import * as types from '../actions/types';

import immutable from 'immutable';

const { Map, List } = immutable;
const initialState = Map({ 
  currentRound:0, 
  status: 0, 
  type: 501, 
  playing: false, 
  ended: false,
  currentDart: 0,
  // audioKey: 'dexter'
  audioKey: 'dartslive'
});
export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_GAME_STATUS: 
      return state;

    case types.UPDATE_ROUND:
      const cr = state.get('currentRound');
      if(action.payload.isNextRound){
        const newState = state.set('currentRound', cr + 1)
        return newState;
      }
      return state;

    case types.SET_GAME:
      return state.set('type', action.payload);

    case types.CHANGE_AUDIO:
      return state.set('audioKey', action.payload);

    case types.GAME_START:
      return state.set('playing', true);

    case types.GAME_END:
      return state.set('playing', false).set('ended', true);

    case types.RESET:
      return initialState;

    default:
      return state;
  }
}