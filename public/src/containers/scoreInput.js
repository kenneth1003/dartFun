import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cx from 'classname';
import helper from '../helper';
import audio from '../resource_entry/audio';

let scoreArr = [];
 for(let i = 1; i <= 20; i++ ){
  scoreArr.push(i);          
}
let round = 0;


function handleScorePlaying(score) {
  if(score === 'd25' || score === 's25') { return audio.playAudBullseye() }
  if(score === 's0') { return audio.playAudMiss() }
  return audio.playAudHit()
}

class App extends Component {
  constructor(props) {
    super(props);

  }
  scoreOnClick(num) {
    if(this.props.players.size === 0) { alert('請先新增玩家'); return };

    const player     = this.props.players.get(this.props.currentPlayer);
    const records    = player.get('records');
    const totalScore = helper.recordsToSum(records);
    const judge      = checkEndCondition(totalScore, helper.symbolToNum(num), this.props.gameStatus.get('type'));

    this.props.updateScore(num, this.props.currentPlayer, this.props.gameStatus.get('currentRound'), round);
    handleScorePlaying(num)

    if(!this.props.gameStatus.get('playing')) { audio.playAudGameStart() }
    if(judge === 1) { audio.playAudVictory(); alert('player' + (this.props.currentPlayer + 1) + 'wins') }
    if(judge === 2) { 
      audio.playAudBust();
      this.props.burst(this.props.currentPlayer, this.props.gameStatus.get('currentRound')); 
      round = 0;
      const allPlayer = this.props.players.size;
      const isNextRound = +this.props.currentPlayer == (allPlayer -1);
      this.props.updateRound(isNextRound, helper.nextPlayer(this.props.players.size, this.props.currentPlayer));
      return; 
    }
    round++;
    if(round >= 3) {
      const allPlayer     = this.props.players.size;
      const isNextRound   = +this.props.currentPlayer == (allPlayer -1);
      const currentPlayer = this.props.currentPlayer;
      const updateRound   = this.props.updateRound;
      // setTimeout(function(){
        handleScorePlaying(num)
        audio.playAudChange();
        round = 0;
        updateRound(isNextRound, helper.nextPlayer(allPlayer, currentPlayer));
      // }, 3000)
    }
  }
  handleReset() {
    var shouldReset = confirm('確定要重來?');
    if (shouldReset) {
      this.props.reset();
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
    const gameType = this.props.gameStatus.get('type');
    console.log( this.props.gameStatus.get('playing') )
    return (
      <ul className="score-btn-list">
        <li onClick={ this.props.addPlayer } className={cx({ 'font-red': true, hidden: this.props.gameStatus.get('playing') })}><button>新增玩家</button></li>
        <li onClick={ this.handleReset.bind(this) }><button>RESET</button></li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li className={ cx({ hidden: this.props.gameStatus.get('playing') }) } style={ {textAlign: 'right'}}>種類：</li>
        <li className={ cx({ active: gameType === 301, hidden: this.props.gameStatus.get('playing') }) } onClick={ this.props.setGame.bind(null, 301) }><button>301</button></li>
        <li className={ cx({ active: gameType === 501, hidden: this.props.gameStatus.get('playing') }) } onClick={ this.props.setGame.bind(null, 501) }><button>501</button></li>
        <li className={ cx({ active: gameType === 701, hidden: this.props.gameStatus.get('playing') }) } onClick={ this.props.setGame.bind(null, 701) }><button>701</button></li>
        <li className={ cx({ active: gameType === 'criket', hidden: this.props.gameStatus.get('playing') }) } onClick={ this.props.setGame.bind(null, 'criket') }><button>Criket</button></li>
        <br/>
        <hr/>
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

function checkEndCondition(point, currentShot, gameType) {
  if(point + currentShot < gameType) { return 0 }
  if(point + currentShot === gameType) { return 1 }
  if(point + currentShot > gameType) { return 2 }
}


export default connect(mapStateToProps, actions)(App);