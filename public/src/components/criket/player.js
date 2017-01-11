import React from 'react';
import cx from 'classname';
import helper from '../../helper';


export default ({ player, key, num, type, cp }) => {
  const records = player.get('criketInfo');
  return (<li className={cx({ player: true, active: num === cp })}>
    <span>Player{ num + 1 }</span> <br/>
    { player.get('criketInfo').get('score') }
  </li>)
}

