import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cx from 'classname';
import helper from '../helper';
import audio from '../resource_entry/audio';

import SettingList from './setting_list';
import NextPlayerMask from '../components/common/next_player_mask';

let scoreArr = [];
 for(let i = 1; i <= 20; i++ ){
  scoreArr.push(i);          
}
let round = {
  current: 0
};



class ScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextPlayerMask: false,
    }
  }
  scoreOnClick(num) {
    if(this.props.players.size === 0) { alert('請先新增玩家'); return };
    const audioGameKey = this.props.gameStatus.get('type') === 'criket' ? 'criket' : 'zero1';
    const audioToPlay = audio[audioGameKey][this.props.gameStatus.get('audioKey')];

    const player     = this.props.players.get(this.props.currentPlayer);
    const records    = player.get('records');
    const totalScore = helper.recordsToSum(records);
    const judge      = checkEndCondition(totalScore, helper.symbolToNum(num), this.props.gameStatus.get('type'));

    this.props.updateScore(num, this.props.currentPlayer, this.props.gameStatus.get('currentRound'), round.current);
    helper.handleScorePlaying(num, audioToPlay)

    if(!this.props.gameStatus.get('playing')) { audioToPlay.playGameStart() }
    if(judge === 1) { audioToPlay.playGameEnd(); alert('player' + (this.props.currentPlayer + 1) + 'wins') }
    if(judge === 2) { 
      audioToPlay.playBust();
      this.props.burst(this.props.currentPlayer, this.props.gameStatus.get('currentRound')); 
      round.current = 0;
      const allPlayer = this.props.players.size;
      const isNextRound = +this.props.currentPlayer == (allPlayer -1);
      this.props.updateRound(isNextRound, helper.nextPlayer(this.props.players.size, this.props.currentPlayer));
      return; 
    }
    round.current++;
    if(round.current >= 3) {
      const allPlayer     = this.props.players.size;
      const isNextRound   = +this.props.currentPlayer == (allPlayer -1);
      const currentPlayer = this.props.currentPlayer;
      const updateRound   = this.props.updateRound;
      const _this         = this;
      this.setState({
        showNextPlayerMask: true
      })
      helper.handleScorePlaying(num,audioToPlay)
      setTimeout(audioToPlay.playPlayerOut.bind(audioToPlay), 700);
      setTimeout(function(){
        audioToPlay.playPlayerIn();
        round.current = 0;
        updateRound(isNextRound, helper.nextPlayer(allPlayer, currentPlayer));
        _this.setState({
          showNextPlayerMask: false
        })
      }, 3000)
    }
  }
  render() {
    const gameType = this.props.gameStatus.get('type');
    return (
      <div className="">
        <SettingList round={ round } />
          <hr/>
        <ul className="score-btn-list">
          <li className="btn-special"><button onClick={ this.scoreOnClick.bind(this, 'd' + 25) }>Bull</button></li>
          <li className="btn-special"><button onClick={ this.scoreOnClick.bind(this, 's' + 0) }>Miss</button></li>
          <br/>
          <li className="s-hide">1倍</li><br className="s-hide"/>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-single" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 's' + (idx+1)) }>{ idx+1 }</button></li>)
          }) }
          <li className="s-hide">2倍</li><br className="s-hide"/>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-double" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 'd' + (idx+1)) }>{ idx+1 }</button></li>)
          }) }
          <li className="s-hide">3倍</li><br className="s-hide"/>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-triple" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 't' + (idx+1)) }>{ idx+1 }</button></li>)
          }) }
        </ul>
        { this.state.showNextPlayerMask && <NextPlayerMask /> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players:  state.players.present,
    gameStatus:  state.gameStatus.present,
    currentPlayer:  state.currentPlayer.present
  }
}

function checkEndCondition(point, currentShot, gameType) {
  if(point + currentShot < gameType) { return 0 }
  if(point + currentShot === gameType) { return 1 }
  if(point + currentShot > gameType) { return 2 }
}


export default connect(mapStateToProps, actions)(ScoreInput);