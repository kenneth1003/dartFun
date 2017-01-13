import React from 'react';
import cx from 'classname';
import helper from '../../helper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export default ({ players, gameStatus }) => {
  let sum;
  if(players.size === 0) {
    return (
      <ul className="">
        <li>-</li>
      </ul>
    );
  }
  if(gameStatus.get('type') === 'criket') {
    sum = helper.sum3DartsCount
  } else {
    sum = helper.sum3Darts
    
  }
  return (
    <div className="total-list" id="total-list">
      {
        players.map((player, idx) => {
          return (<ul className="total-list__player" key={idx}>
            <li>
            { 'Player' + ( idx + 1 ) }
            {
              player.get('records')
                .map((round, idx) => {
                  return (<div className="total-list__round" key={idx}>
                  { (idx + 1) + '. ' }
                  {
                    round.map((dart, idx) => {
                      return <span className="total-list__score" key={idx}>{ dart }</span>
                    })
                  }
                  { sum(round) }
                  </div>)
              })
            }
            </li>
          </ul>)
        })
      }
    </div>
  )
}

