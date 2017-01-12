import React from 'react';
import cx from 'classname';
import helper from '../helper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
      {
        players.get(currentPlayer)
          .get('records')
          .map((round, idx) => { let sum = round.reduce((pre, cur) => (pre + helper.symbolToNum(cur)), 0); sum = isNaN(sum) ? '呵呵' : sum ; return (<li key={ idx } className={cx({ 'font-red': sum > 100 })}>{ 
            sum
          }</li>)} )
      }
      </ReactCSSTransitionGroup>
    </ol>
  )
}