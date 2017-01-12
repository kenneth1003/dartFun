import React, { Component } from 'react';
import Players from '../components/players';
import Stats from '../components/stats';
import Hint from '../components/hint';
// import Result from '../components/result/result';
import CurrentScore from '../components/current_score';
import CurrentRound from '../components/current_round';
import HistoryScore from '../components/history_score';
import ScoreInput from './score_input';
import { connect } from 'react-redux';

import CriketPlayers from '../components/criket/players';
import CriketStats from '../components/criket/stats';
// import Result from '../components/criket/result';
import CriketScoreBoard from '../components/criket/score_board';
import CriketCurrentRound from '../components/criket/current_round';
import CriketHistoryScore from '../components/criket/history_score';
import CriketScoreInput from './criket/score_input';


class App extends Component {
  render() {
    if(this.props.gameStatus.get('type') === 'criket') {
      return (
        <div className="container">
          <h1></h1>
          <div className="top">
            <CriketHistoryScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } />
            <CriketScoreBoard players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus }  />
            <CriketCurrentRound players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
          </div>
          <CriketPlayers players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
          <CriketScoreInput />
        </div>
      );
    }
    return (
      <div className="container">
        <Hint players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        <div className="top">
          <HistoryScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } />
          <Stats players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus }  />
          <CurrentScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
          <CurrentRound players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        </div>
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