// import {

// } from './types';
const UNDO_SCORE = 'undo_score';
const UPDATE_SCORE = 'update_score';
const UPDATE_ROUND = 'update_round';
const RESET = 'reset';
const ADD_PLAYER = 'add_player';

export function updateScore (score, cp, cr, cd) {
  return {
    type: UPDATE_SCORE,
    payload: {
      currentPlayer: cp,
      currentRound: cr,
      currentDart: cd,
      score: score
    }
  }
}

export function updateRound (isNextRound, currentPlayer) {
  return {
    type: UPDATE_ROUND,
    payload: {
      isNextRound,
      currentPlayer
    }
  }
}

export function undoScore () {
  return {
    type: UNDO_SCORE
  }
}


export function reset () {
  return {
    type: RESET
  }
}

export function addPlayer () {
  return {
    type: ADD_PLAYER
  }
}