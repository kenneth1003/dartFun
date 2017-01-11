import React from 'react';
import cx from 'classname';
import helper from '../../helper';


export default ({ player, count, num }) => {
  console.log(count)
  return (<div className={cx({ player: true })}>
    { count }
  </div>)
}

