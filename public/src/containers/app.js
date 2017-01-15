import React, { Component } from 'react';
import Players from '../components/players';
import Stats from '../components/stats';
import Hint from '../components/hint';
import TotalStat from '../components/common/total_stats';
import TotalStatToggle from '../components/common/total_stats_toggle';
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
          <div className="main-area pure-g">
            <div className="pure-u-1-1 pure-u-lg-1-2">
              <div className="top">
                <CriketScoreBoard players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus }  />
                <div className="flex">
                  <CriketPlayers players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
                  <CriketCurrentRound players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
                </div>
                <CriketHistoryScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } />
              </div>
            </div>
            <CriketScoreInput />
          </div>
          <TotalStatToggle />
          <TotalStat players={ this.props.players } gameStatus={ this.props.gameStatus }/>
        </div>
      );
    }
    return (
      <div className="container">
        <Hint players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
        <Stats players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus }  />
        <div className="main-area pure-g">
          <div className="pure-u-1-1 pure-u-lg-1-2">
            <div className="top">
              <CurrentScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
              <div className="flex">
                <Players players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
                <CurrentRound players={ this.props.players } currentPlayer={ this.props.currentPlayer } gameStatus={ this.props.gameStatus } />
              </div>
              <HistoryScore players={ this.props.players } currentPlayer={ this.props.currentPlayer } />
            </div>
          </div>
          <ScoreInput />
        </div>
        <TotalStatToggle />
        <TotalStat players={ this.props.players } gameStatus={ this.props.gameStatus }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players:  state.players.present,
    gameStatus:  state.gameStatus.present,
    currentPlayer:  state.currentPlayer.present
  }
}

export default connect(mapStateToProps)(App);