const audGameStart = document.getElementById("aud-gamestart");
const audHit       = document.getElementById("aud-hit");
const audBullseye  = document.getElementById("aud-bullseye");
const audMiss      = document.getElementById("aud-miss");
const audBust      = document.getElementById("aud-bust");
const audChange    = document.getElementById("aud-change");
const audVictory   = document.getElementById("aud-victory");
const audio = {
  playAudGameStart: function() {
  audGameStart.play();
  },
  playAudHit: function() {
    audHit.play();
  },
  playAudBullseye: function() {
    audBullseye.play();
  },
  playAudMiss: function() {
    audMiss.play();
  },
  playAudBust: function() {
    audBust.play();
  },
  playAudChange: function() {
    audChange.play();
  },
  playAudVictory: function() {
    audVictory.play();
  }
}


export default audio;