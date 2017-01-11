import React from 'react';

export default ({ player, key, num, type }) => {
  const records = player.get('records');
  return (<li className="player">
    <span>Player{ num + 1 }</span> <br/>
    { type - recordsToSum(records) }
  </li>)
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