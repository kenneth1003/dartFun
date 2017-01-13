import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import cx from 'classname';
import helper from '../../helper';
import audio from '../../resource_entry/audio';


import SettingList from '../setting_list';
import NextPlayerMask from '../../components/common/next_player_mask';

let scoreArr = [];
 for(let i = 15; i <= 20; i++ ){
  scoreArr.push(i);          
 }
 let round = {
   current: 0
 };


class App extends Component {
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

    this.props.updateScore(num, this.props.currentPlayer, this.props.gameStatus.get('currentRound'), round.current);
    helper.handleScorePlaying(num, audioToPlay)
    if(!this.props.gameStatus.get('playing')) { audioToPlay.playGameStart() }

    round.current++;
    if(round.current >= 3) {
      const _this = this;
      this.setState({
        showNextPlayerMask: true
      })
      helper.handleScorePlaying(num,audioToPlay)
      setTimeout(audioToPlay.playPlayerOut.bind(audioToPlay), 700);

      setTimeout(() => {
        round.current = 0;
        audioToPlay.playPlayerIn();
        const allPlayer = _this.props.players.size;
        const isNextRound = +_this.props.currentPlayer == (allPlayer -1);
        _this.props.updateRound(isNextRound, helper.nextPlayer(_this.props.players.size, _this.props.currentPlayer));
        _this.setState({
          showNextPlayerMask: false
        })
      }, 3000)
    }
  }

  render() {
    return (
      <div>
        <SettingList round={ round } />
        <hr/>
        <ul className={ cx({"score-btn-list": true, hidden: !this.props.gameStatus.get('playing') })}>
          <li className="btn-special"><button onClick={ this.scoreOnClick.bind(this, 's' + 0) }>Miss</button></li>
          <br/>
          <li>1倍</li>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-single" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 's' + (idx+15)) }>{ idx+15 }</button></li>)
          }) }
          <li className="btn-single"><button onClick={ this.scoreOnClick.bind(this, 's25') }>Bull</button></li>
          <br/>
          <li>2倍</li>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-double" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 'd' + (idx+15)) }>{ idx+15 }</button></li>)
          }) }
          <li className="btn-double"><button onClick={ this.scoreOnClick.bind(this, 'd25') }>Bull</button></li>
          <br />
          <li>3倍</li>
          { scoreArr.map( (score, idx) => {
            return (<li className="btn-triple" key={ idx }><button onClick={ this.scoreOnClick.bind(this, 't' + (idx+15)) }>{ idx+15 }</button></li>)
          }) }
          <li className="btn-double"><button>&nbsp;</button></li>

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



export default connect(mapStateToProps, actions)(App);