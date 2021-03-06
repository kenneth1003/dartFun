import React from 'react';
import helper from '../helper';
import cx from 'classname';

export default ({ players, currentPlayer, gameStatus }) => {
  if(players.size === 0) {
    return (
      <ol className="current-round-list">
        <li>-</li>
        <li>-</li>
        <li>-</li>
      </ol>
    );
    }
  return (
    <ul className="current-round-list">
      <span className="score-label">回合得分</span>
      {
        players.get(currentPlayer)
          .get('records')
          .get(gameStatus.get('currentRound'))
          .map((dart,idx) => <li key={ idx }>{ helper.symbolToString(dart) }</li> )
      }

    </ul>
  )
}