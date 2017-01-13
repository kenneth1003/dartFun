import React from 'react';
import helper from '../helper'
let avg = [];
export default ({ players, currentPlayer, gameStatus }) => {
  const player = players.get(currentPlayer);
  if(!player) { return <div className="stats">三標平均:</div> }
  const records = player.get('records');
  const recordSum = helper.recordsToSum(records);
  const numerator = recordSum - helper.sum3Darts(records.get(gameStatus.get('currentRound')));
  const denominator = gameStatus.get('currentRound');

  if(gameStatus.get('type') - numerator < 100) {
    return (<div className="stats">三標平均:<br/>{ avg[currentPlayer] }</div>)
  }
  avg[currentPlayer] = (numerator / denominator).toFixed(2)
  if (!denominator) { return <div className="stats">三標平均: <br/>-- </div>}
  return (<div className="stats">三標平均: <br/> { avg[currentPlayer] }</div>)
}
