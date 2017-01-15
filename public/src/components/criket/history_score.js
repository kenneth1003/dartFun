import React from 'react';
import cx from 'classname';
import helper from '../../helper'

export default ({ players, currentPlayer }) => {
  if(players.size === 0) {
    return (
      <ul className="history-score-list">
        <li>-</li>
      </ul>
    );
    }
  return (
    <ul className="history-score-list">
      {
        players.get(currentPlayer)
          .get('records')
          .map((round, idx) => { let sum = round.reduce((pre, cur) => (pre + helper.symboToCounts(cur)), ''); 
            return (<li key={ idx }>
            ({ idx + 1})
            &nbsp;
            { sum }
            &nbsp;

        </li>)} )
      }
    </ul>
  )
}