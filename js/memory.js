

var displayVals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var arrCards = ["king", "queen", "jack", "ace", "ten"];
var randFace = Math.floor(Math.random()*arrCards.length);

function assignCards(){
  for (var i = 0; i<displayPos.length; i++){
    if(displayVals[i].length < 2){
      var face = arrCards[randFace];
      displayVals[i] = face;
      displayVals[Math.floor(Math.random()*(arrCards.length-i)) + i] = face;
    } else {
      continue;
    }
  }
}
