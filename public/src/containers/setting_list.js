import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cx from 'classname';
import helper from '../helper';
import audio from '../resource_entry/audio';

import { ActionCreators } from 'redux-undo';
import store from '../store';


class SettingList extends Component {
  handleUndo() {
    store.dispatch(ActionCreators.undo());
    if(this.props.round.current > 0) { 
      this.props.round.current--; 
      return
    }
    this.props.round.current = 3;

  }
  handleReset() {
    var shouldReset = confirm('確定要重來?');
    if (shouldReset) {
      this.props.round.current = 0;
      this.props.reset();
    } 
  }
  gameStart() {
    this.props.gameStart();
    const audioGameKey = this.props.gameStatus.get('type') === 'criket' ? 'criket' : 'zero1';
    const audioToPlay = audio[audioGameKey][this.props.gameStatus.get('audioKey')];
    if(!this.props.gameStatus.get('playing')) { audioToPlay.playGameStart() }
  }
  render() {
    const gameType = this.props.gameStatus.get('type');
    const isPlaying = this.props.gameStatus.get('playing');
    const isEnded = this.props.gameStatus.get('ended');
    return (
      <ul className="setting-list">
        <li onClick={ this.props.addPlayer } className={cx({ 'font-red': true, hidden: isPlaying || isEnded })}>
          <button>新增玩家</button>
        </li>
        <li onClick={ this.gameStart.bind(this) } className={cx({ 'font-red': true, hidden: isPlaying || isEnded })}>
          <button>開始</button>
        </li>
        <li onClick={ this.handleReset.bind(this) }>
          <button>RESET</button>
        </li>
        <li onClick={ this.handleUndo.bind(this) }>
          <button>UNDO</button>
        </li>
        <li  style={ {textAlign: 'right'}}>音效：</li>
        <li className={ cx({ active: this.props.gameStatus.get('audioKey') === 'dexter' }) } 
            onClick={ this.props.changeAudio.bind(null, 'dexter') }>
          <button>1</button>
        </li>
        <li className={ cx({ active: this.props.gameStatus.get('audioKey') === 'dartslive' }) } 
            onClick={ this.props.changeAudio.bind(null, 'dartslive') }>
            <button>2</button>
        </li>
        <li className={ cx({ hidden: isPlaying || isEnded }) } style={ {textAlign: 'right'}}>
          種類：
        </li>
        <li className={ cx({ active: gameType === 301, hidden: isPlaying || isEnded }) } 
            onClick={ this.props.setGame.bind(null, 301) }>
          <button>301</button>
        </li>
        <li className={ cx({ active: gameType === 501, hidden: isPlaying || isEnded }) } 
            onClick={ this.props.setGame.bind(null, 501) }>
          <button>501</button>
        </li>
        <li className={ cx({ active: gameType === 701, hidden: isPlaying || isEnded }) } 
            onClick={ this.props.setGame.bind(null, 701) }>
          <button>701</button>
        </li>
        <li className={ cx({ active: gameType === 'criket', hidden: isPlaying || isEnded }) } 
            onClick={ this.props.setGame.bind(null, 'criket') }>
          <button>Criket</button>
        </li>
      </ul>
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


export default connect(mapStateToProps, actions)(SettingList);