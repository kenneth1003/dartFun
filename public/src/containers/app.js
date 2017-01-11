import React, { Component } from 'react';
import Players from '../components/players';
import CurrentScore from '../components/currentScore';
import CurrentRound from '../components/currentRound';
import HistoryScore from '../components/historyScore';
import ScoreInput from './scoreInput';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <div className="current-player">Player { this.props.currentPlayer + 1 }</div>
        <HistoryScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } />
        <CurrentScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        <CurrentRound players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        <Players players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        <ScoreInput />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players:  state.players,
    gameStatus:  state.gameStatus,
    currentPlayer:  state.currentPlayer
  }
}

export default connect(mapStateToProps)(App);