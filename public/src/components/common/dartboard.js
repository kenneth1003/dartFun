import React, { Component } from 'react';
import cx from 'classname';
import DartboardJS from '../../venders/dartboard';
import helper from '../../helper';

let dartboard;

export default class Dartboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let _this = this;
    dartboard = new DartboardJS('#dartboard');
    dartboard.render();
    document.querySelector('#dartboard').addEventListener('throw', function(d) {
      const symbol = helper.mapDartboardBedToSymbol(d.detail.bed.toLowerCase());
      if(_this.props.gameStatus.get('type') === 'criket') {
        if(+symbol.slice(1) < 15) {
          _this.props.scoreOnClick('s0');
          return;
        }
      }
      _this.props.scoreOnClick(symbol);
   });
  }
  render() {
    return <div className={ cx({'dartboard': true, 'dartboard-hidden': this.props.gameStatus.get('inputMode') !== 'board' || !this.props.gameStatus.get('playing') })} id="dartboard" />
  }
}


