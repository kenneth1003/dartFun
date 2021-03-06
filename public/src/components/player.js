import React from 'react';
import cx from 'classname';
import helper from '../helper';


export default ({ player, key, num, type, cp }) => {
  const records = player.get('records');
  return (<li className={cx({ player: true, active: num === cp })}>
    <span>Player{ num + 1 }</span> <br/>
    { type - helper.recordsToSum(records) }
  </li>)
}

