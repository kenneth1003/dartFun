import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
let scoreArr = [];
 for(let i = 0; i <= 60; i++ ){
  scoreArr.push(i);          
 }
 let round = 0;
class App extends Component {
  constructor(props) {
    super(props);

  }
  scoreOnClick(num) {
    this.props.updateScore(num, this.props.currentPlayer, this.props.gameStatus.get('currentRound'), round);
    round++;
    if(round >= 3) {
      round = 0;
      const allPlayer = this.props.players.size;
      const isNextRound = +this.props.currentPlayer == (allPlayer -1);
      console.log('isnext', isNextRound)
      this.props.updateRound(isNextRound, nextPlayer(this.props.players.size, this.props.currentPlayer));
    }
  }
  render() {
    return (
      <div>
        { this.renderScoreBtn() }
      </div>
    );
  }
  renderScoreBtn() {
    return (
      <ul className="score-btn-list">
        { scoreArr.map( (score, idx) => {
          return <li key={ idx } onClick={ this.scoreOnClick.bind(this, idx) }>{ idx }</li>
        }) }
        <li onClick={ this.props.addPlayer }>ADD PLAYER</li>
        <li onClick={ this.props.reset }>RESET</li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    players:  state.players,
    gameStatus:  state.gameStatus,
    currentPlayer:  state.currentPlayer
  }
}
function nextPlayer(sum, player) {
  if(player + 1 >= sum) {
    return 0;
  } else {
    return player + 1; 
  }
}


export default connect(mapStateToProps, actions)(App);