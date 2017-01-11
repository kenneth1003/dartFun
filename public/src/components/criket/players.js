import React from 'react';
import Player from './player';

export default ({ players, currentPlayer, gameStatus }) => {
  if(players.size === 0) {
    return(
    <ul className="player-list">
      <li className="player">
        你好
        <br/>
        <br/>
      </li>
    </ul>
  )
  }
  return (
    <ul className="player-list">
      {
        players.map( (player, idx) => <Player type={ gameStatus.get('type') } key={ idx } player={ player } num={ idx } cp={ currentPlayer } />)
      }
    </ul>
  )
}

