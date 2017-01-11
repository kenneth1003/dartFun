import React from 'react';
import cx from 'classname';
import Count from './scoreBoardCount';
import helper from '../../helper';


export default ({ player, key, num, type, cp }) => {
  const records = player.get('records');
  const counts = player.get('criketInfo').get('counts');
  // const counts = helper.recordsToCounts(records);
  return (<li className={cx({ player: true, active: num === cp })}>
    <span>Player{ num + 1 }</span>

    {
      counts.map((count, idx) => (
        <div>
          <Count key={ idx } count={ counts.get(idx).get('count') } /> 
          <br/>
        </div>
      ))
    }
  </li>)
}

