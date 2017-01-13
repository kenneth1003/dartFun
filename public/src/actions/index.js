import * as types from '../actions/types';



export function updateScore (score, cp, cr, cd) {
  return {
    type: types.UPDATE_SCORE,
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
    type: types.UPDATE_ROUND,
    payload: {
      isNextRound,
      currentPlayer
    }
  }
}

export function undoScore () {
  return {
    type: types.UNDO_SCORE
  }
}

export function gameEnd () {
  return {
    type: types.GAME_END
  }
}

export function gameStart () {
  return {
    type: types.GAME_START
  }
}

export function changeAudio(key) {
  return {
    type: types.CHANGE_AUDIO,
    payload: key
  }
}


export function reset () {
  return {
    type: types.RESET
  }
}

export function addPlayer () {
  return {
    type: types.ADD_PLAYER
  }
}

export function setGame (game) {
  return {
    type:  types.SET_GAME,
    payload: game
  }
}



export function burst (cp, cr) {
  return {
    type:  types.BURST,
    payload: {
      currentPlayer: cp,
      currentRound: cr
    }
  }
}

