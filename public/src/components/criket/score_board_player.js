import React from 'react';
import cx from 'classname';
import Count from './score_board_count';
import helper from '../../helper';


export default ({ player, key, num, type, cp }) => {
  const records = player.get('records');
  const counts = player.get('criketInfo').get('counts');
  const reverseCounts = player.get('criketInfo').get('counts').reverse();
  return (<li className={cx({ player: true, active: num === cp })}>
    <span className="fs14">Player{ num + 1 }</span>

    {
      reverseCounts.map((count, idx) => (
        <div>
          <Count key={ idx } count={ reverseCounts.get(idx).get('count') } /> 
          <br/>
        </div>
      ))
    }
  </li>)
}

