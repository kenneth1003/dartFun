

const dexterUrlRoot   = '/audio/zero1/dexter/';
const dexterGameStart = new Audio(`${dexterUrlRoot}game-start.mp3`);
const dexterGameEnd   = new Audio(`${dexterUrlRoot}victory.wav`);
const dexterHit       = new Audio(`${dexterUrlRoot}hit.mp3`);
const dexterBull      = new Audio(`${dexterUrlRoot}bullseye.wav`);
const dexterMiss      = new Audio(`${dexterUrlRoot}miss.wav`);
const dexterBust      = new Audio(`${dexterUrlRoot}bust.mp3`);
const dexterPlayerIn  = new Audio(`${dexterUrlRoot}change.mp3`);

const dlCriketUrlRoot   = '/audio/criket/dartslive/';
const dlCriketGameStart = new Audio(`${dlCriketUrlRoot}game-start.mov`);
// const dlCriketGameEnd   = new Audio(`${dlCriketUrlRoot}game-start.mov`);
const dlCriketSingle    = new Audio(`${dlCriketUrlRoot}single.mov`);
const dlCriketDouble    = new Audio(`${dlCriketUrlRoot}double.mov`);
const dlCriketTriple    = new Audio(`${dlCriketUrlRoot}triple.mov`);
const dlCriketSBull     = new Audio(`${dlCriketUrlRoot}s-bull.mov`);
const dlCriketDBull     = new Audio(`${dlCriketUrlRoot}d-bull.mov`);
const dlCriketMiss      = new Audio(`${dlCriketUrlRoot}miss.mov`);
const dlCriketPlayerIn  = new Audio(`${dlCriketUrlRoot}player-in.mov`);
const dlCriketPlayerOut = new Audio(`${dlCriketUrlRoot}player-out.mov`);

const dlZero1UrlRoot   = '/audio/zero1/dartslive/';
const dlZero1GameStart = new Audio(`${dlZero1UrlRoot}game-start.mov`);
// const dlZero1GameEnd   = new Audio(`${dlZero1UrlRoot}game-start.mov`);
const dlZero1Single    = new Audio(`${dlZero1UrlRoot}single.mov`);
const dlZero1Double    = new Audio(`${dlZero1UrlRoot}double.mov`);
const dlZero1Triple    = new Audio(`${dlZero1UrlRoot}triple.mov`);
const dlZero1SBull     = new Audio(`${dlZero1UrlRoot}s-bull.mov`);
const dlZero1DBull     = new Audio(`${dlZero1UrlRoot}d-bull.mov`);
const dlZero1Miss      = new Audio(`${dlZero1UrlRoot}miss.mov`);
const dlZero1PlayerIn  = new Audio(`${dlZero1UrlRoot}player-in.mov`);
const dlZero1PlayerOut = new Audio(`${dlZero1UrlRoot}player-out.mov`);



const audio = {
  criket: {
    dexter: {
      playSBull: dexterBull.play.bind(dexterBull),
      playDBull: dexterBull.play.bind(dexterBull),
      playSingle: dexterHit.play.bind(dexterHit),
      playDouble: dexterHit.play.bind(dexterHit),
      playTriple: dexterHit.play.bind(dexterHit),
      playMiss: dexterMiss.play.bind(dexterMiss),
      playBust: dexterBust.play.bind(dexterBust),
      playPlayerIn: dexterPlayerIn.play.bind(dexterPlayerIn),
      playPlayerOut: function(){},
      playGameStart: dexterGameStart.play.bind(dexterGameStart),
      playGameEnd: dexterGameEnd.play.bind(dexterGameEnd)
    },
    dartslive: {
      playSBull: dlCriketSBull.play.bind(dlCriketSBull),
      playDBull: dlCriketDBull.play.bind(dlCriketDBull),
      playSingle: dlCriketSingle.play.bind(dlCriketSingle),
      playDouble: dlCriketDouble.play.bind(dlCriketDouble),
      playTriple: dlCriketTriple.play.bind(dlCriketTriple),
      playMiss: dlCriketMiss.play.bind(dlCriketMiss),
      playBust: dexterBust.play.bind(dexterBust),
      playPlayerIn: dlCriketPlayerIn.play.bind(dlCriketPlayerIn),
      playPlayerOut: dlCriketPlayerOut.play.bind(dlCriketPlayerOut),
      playGameStart: dlCriketGameStart.play.bind(dlCriketGameStart),
      playGameEnd: dexterGameEnd.play.bind(dexterGameEnd)
    }
  },
  zero1: {
    dexter: {
      playSBull: dexterBull.play.bind(dexterBull),
      playDBull: dexterBull.play.bind(dexterBull),
      playSingle: dexterHit.play.bind(dexterHit),
      playDouble: dexterHit.play.bind(dexterHit),
      playTriple: dexterHit.play.bind(dexterHit),
      playMiss: dexterMiss.play.bind(dexterMiss),
      playBust: dexterBust.play.bind(dexterBust),
      playPlayerIn: dexterPlayerIn.play.bind(dexterPlayerIn),
      playPlayerOut: function(){},
      playGameStart: dexterGameStart.play.bind(dexterGameStart),
      playGameEnd: dexterGameEnd.play.bind(dexterGameEnd)
    },
    dartslive: {
      playSBull: dlZero1SBull.play.bind(dlZero1SBull),
      playDBull: dlZero1DBull.play.bind(dlZero1DBull),
      playSingle: dlZero1Single.play.bind(dlZero1Single),
      playDouble: dlZero1Double.play.bind(dlZero1Double),
      playTriple: dlZero1Triple.play.bind(dlZero1Triple),
      playMiss: dlZero1Miss.play.bind(dlZero1Miss),
      playBust: dexterBust.play.bind(dexterBust),
      playPlayerIn: dlZero1PlayerIn.play.bind(dlZero1PlayerIn),
      playPlayerOut: dlZero1PlayerOut.play.bind(dlZero1PlayerOut),
      playGameStart: dlZero1GameStart.play.bind(dlZero1GameStart),
      playGameEnd: dexterGameEnd.play.bind(dexterGameEnd)
    }
  }
}


export default audio;

