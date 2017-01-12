import React from 'react';
import cx from 'classname';
import helper from '../helper'

export default ({ players, currentPlayer }) => {
  if(players.size === 0) {
    return (
      <ul className="history-score-list">
        <li>-</li>
      </ul>
    );
    }
  return (
    <ol className="history-score-list">
      {
        players.get(currentPlayer)
          .get('records')
          .map((round, idx) => { let sum = round.reduce((pre, cur) => (pre + helper.symbolToNum(cur)), 0); sum = isNaN(sum) ? '呵呵' : sum ; return (<li key={ idx } className={cx({ fontRed: sum > 100 })}>{ 
            sum
          }</li>)} )
      }
    </ol>
  )
}