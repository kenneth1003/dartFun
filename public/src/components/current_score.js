import React from 'react';
import helper from '../helper';

export default ({ players, currentPlayer, gameStatus }) => {
  const player = players.get(currentPlayer);
  if(!player) { return <div className="current-score">+</div> }
  const records = player.get('records');
  return (
    <div className="current-score">{ gameStatus.get('type') - helper.recordsToSum(records) }</div>
  )
}

