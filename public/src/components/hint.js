import React from 'react';
import helper from '../helper';

export default ({ players, currentPlayer, gameStatus }) => {
  const player = players.get(currentPlayer);
  if(!player) { return <div className="hint">---</div> }
  const records = player.get('records');
  const hintArr = helper.getHintMaster(gameStatus.get('type') - helper.recordsToSum(records));
  return (
   <div className="hint">{ 
    hintArr.map((hint) => <span>{ helper.symbolToString(hint) }</span>)
   }</div>
  )
}

