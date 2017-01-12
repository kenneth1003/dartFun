import React from 'react';
import helper from '../../helper';
import Player from './scoreBoardPlayer';
import cx from 'classname';

export default ({ players, currentPlayer, gameStatus }) => {
  const player = players.get(currentPlayer);
  if(!player) { return (<ul className="criket-score-board">
    <li className="player">
      <span>&nbsp;</span>
      <div>
        <div className={cx({ player: true })}>Bull</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>20</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>19</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>18</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>17</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>16</div><br/>
      </div>
      <div>
        <div className={cx({ player: true })}>15</div><br/>
      </div>
    </li>
  </ul>) }
  return (
   <ul className="criket-score-board">
      <li className="player">
        <span>&nbsp;</span>
        <div>
          <div className={cx({ player: true })}>Bull</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>20</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>19</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>18</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>17</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>16</div><br/>
        </div>
        <div>
          <div className={cx({ player: true })}>15</div><br/>
        </div>
      </li>
      {
        players.map( (player, idx) => <Player type={ gameStatus.get('type') } num={ idx } key={ idx } player={ player } cp={ currentPlayer } />)
      }
    </ul>
  )
}

