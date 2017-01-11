import React from 'react';
import cx from 'classname';
import helper from '../../helper';


export default ({ player, count, num, key }) => {
  let img;
  if (count === 0) {
    img = <div>&nbsp;</div>;
  }
  if (count === 1) {
    img = <div className="count-img count-img-1"></div>
  }
  if (count === 2) {
    img = <div className="count-img count-img-2"></div>
  }
  if (count >= 3) {
    img = <div className="count-img count-img-3"></div>;
  }
  
  return (<div className={cx({ player: true, w40: true })}>
    {
      img 
    }
  </div>)
}

