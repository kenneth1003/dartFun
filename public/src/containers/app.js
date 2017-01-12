import React, { Component } from 'react';
import Players from '../components/players';
import Stats from '../components/stats';
import Hint from '../components/hint';
import TotalStat from '../components/common/total_stats';
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

//<TotalStat players={ this.props.players } />
function mapStateToProps(state) {
  return {
    players:  state.players.present,
    gameStatus:  state.gameStatus.present,
    currentPlayer:  state.currentPlayer.present
  }
}

export default connect(mapStateToProps)(App);