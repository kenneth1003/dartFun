import * as types from '../actions/types';
import helper from '../helper';

import immutable from 'immutable';

const { Map, List } = immutable;

const initialState = List([]);

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return state.push(Map({
        sum: 501,
        records: List([List([0,0,0])]),
        criketInfo: Map({ score: 0, counts: List([
          Map({count:0, name: "15"}),
          Map({count:0, name: "16"}),
          Map({count:0, name: "17"}),
          Map({count:0, name: "18"}),
          Map({count:0, name: "19"}),
          Map({count:0, name: "20"}),
          Map({count:0, name: "bull"})]) })
      }));
    case types.UPDATE_SCORE:
      const { currentPlayer, currentRound, currentDart,score }  = action.payload;
      const updated01 = state.setIn([currentPlayer, 'records' ,currentRound, currentDart], score);
      // criketScoreCount(score, state, currentPlayer);
      return criketScoreCount(score, updated01, currentPlayer);

    case types.BURST:
      const cp = action.payload.currentPlayer; 
      const cr = action.payload.currentRound;
      return state.setIn([cp, 'records' ,cr], List([0,0,0, 'burst0']));


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

function criketScoreCount(symbol, state, currentPlayer) {
  if(typeof dart === 'number'){ return state; }
  const num = +symbol.slice(1);
  let newState;
  if(num < 15) { return state; }
  const countsIdx = num === 25 ? 6 : num - 15;
  const currentPlayerCount = state.get(currentPlayer).get('criketInfo').get('counts').get(countsIdx).get('count');
  newState = state.map((player, idx) => {
    const currentCount = player.get('criketInfo').get('counts').get(countsIdx).get('count');
    const currentScore = player.get('criketInfo').get('score');
    const multiplier = (+helper.symboToCounts(symbol));
    let offset = 0;
    if ( idx === currentPlayer ) { 
      return player.setIn( ['criketInfo', 'counts', countsIdx, 'count'], currentCount + multiplier); 
    }

    if (currentPlayerCount < 3) { 
      console.log('oooo',offset);
      offset = 3 - currentPlayerCount;
    }

    if (currentCount < 3) {
      const updatedScore = currentScore + num * Math.max(0, (multiplier - offset));
      return player.setIn( ['criketInfo', 'score'], updatedScore)
    }
    return player;
  })
  return newState; 
}