import React from 'react';

export default ({ players, currentPlayer, gameStatus }) => {
  const player = players.get(currentPlayer);
  if(!player) { return <div className="current-score">Hello</div> }
  const records = player.get('records');
  return (
   <div className="current-score">{ gameStatus.get('type') - recordsToSum(records) }</div>
  )
}


function recordsToSum(records) {
  let rtn = records.reduce(function(pre, cur) {
    let sum = 0;
    sum  = cur.get(0) + cur.get(1) + cur.get(2);
    pre += sum;
    return pre;
  }, 0);
  return rtn;
}