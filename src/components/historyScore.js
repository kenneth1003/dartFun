import React from 'react';

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
          .map((round) => <li>{ round.reduce((pre, cur) => (pre + cur), 0) }</li> )
      }
    </ol>
  )
}