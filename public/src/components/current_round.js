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
    <ol className="current-round-list">
      {
        players.get(currentPlayer)
          .get('records')
          .get(gameStatus.get('currentRound'))
          .map((dart,idx) => <li key={ idx }>{ helper.symbolToNum(dart) }</li> )
      }
    </ol>
  )
}